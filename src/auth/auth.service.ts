import { RegisterRequestDto } from './dto/register-request-dto.js';
import { LoginRequestDto } from './dto/login-request-dto.js';
import { UsersService } from '../users/users.service.js';
import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { ResetPasswordRequestDto } from './dto/reset-password-request-dto.js';
import { ForgotPasswordRequestDto } from './dto/forgot-password-request-dto.js';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';

@Injectable()
export class AuthService {
  private passwordResetTokens: {
    email: string;
    token: string;
    expiresAt: Date;
  }[] = [];

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerRequest: RegisterRequestDto) {
    if (registerRequest.password !== registerRequest.passwordConfirmation) {
      throw new BadRequestException('Password and confirmation do not match');
    }

    const existingUser = await this.usersService.findUserByEmail(
      registerRequest.email,
    );
    if (existingUser) {
      throw new BadRequestException('Email already in use');
    }

    const passwordHash = await this.hashPassword(registerRequest.password);
    const newUser = await this.usersService.createUser(
      registerRequest.name,
      registerRequest.email,
      passwordHash,
      'user',
    );

    return {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    };
  }

  async login(loginRequest: LoginRequestDto) {
    const user = await this.usersService.findUserByEmail(loginRequest.email);
    if (
      !user ||
      !(await this.verifyPassword(loginRequest.password, user.passwordHash))
    ) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = { sub: user.id, email: user.email, role: user.role };
    const accessToken = await this.jwtService.signAsync(payload);

    return {
      message: 'Login successful',
      accessToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  }

  async forgotPassword(forgotPasswordRequest: ForgotPasswordRequestDto) {
    const user = await this.usersService.findUserByEmail(
      forgotPasswordRequest.email,
    );
    if (!user) {
      throw new NotFoundException('User not found');
    }

    this.passwordResetTokens = this.passwordResetTokens.filter(
      (token) => token.email !== forgotPasswordRequest.email,
    );

    const token = this.generateResetToken();
    const expiresAt = new Date(Date.now() + 3600000); // 1 hour validity

    this.passwordResetTokens.push({
      email: forgotPasswordRequest.email,
      token,
      expiresAt,
    });

    console.log(
      `[HTTPS EMAIL] Kirim link reset ke ${user.email}: https://myapp.com/reset-password?token=${token}`,
    );

    return {
      message: 'Password reset token has been sent to your email',
      token, // Included for testing convenience
    };
  }

  generateResetToken(): string {
    return randomBytes(32).toString('hex');
  }

  async resetPassword(resetPasswordRequest: ResetPasswordRequestDto) {
    if (
      resetPasswordRequest.newPassword !==
      resetPasswordRequest.newPasswordConfirmation
    ) {
      throw new BadRequestException(
        'New password and confirmation do not match',
      );
    }

    const tokenIndex = this.passwordResetTokens.findIndex(
      (entry) =>
        entry.email === resetPasswordRequest.email &&
        entry.token === resetPasswordRequest.token,
    );

    if (tokenIndex === -1) {
      throw new BadRequestException('Invalid email or reset token');
    }

    const tokenEntry = this.passwordResetTokens[tokenIndex];

    if (tokenEntry.expiresAt < new Date()) {
      this.passwordResetTokens.splice(tokenIndex, 1);
      throw new BadRequestException('Reset token has expired');
    }

    this.passwordResetTokens.splice(tokenIndex, 1);

    const user = await this.usersService.findUserByEmail(
      resetPasswordRequest.email,
    );
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const passwordHash = await this.hashPassword(resetPasswordRequest.newPassword);
    await this.usersService.updateUserPassword(user.email, passwordHash);

    return {
      message: 'Password has been reset successfully',
    };
  }

  private async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  private async verifyPassword(
    password: string,
    passwordHash: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, passwordHash);
  }
}
