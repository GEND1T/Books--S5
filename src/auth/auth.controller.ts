import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { RegisterRequestDto } from './dto/register-request-dto.js';
import { LoginRequestDto } from './dto/login-request-dto.js';
import { ForgotPasswordRequestDto } from './dto/forgot-password-request-dto.js';
import { ResetPasswordRequestDto } from './dto/reset-password-request-dto.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerRequest: RegisterRequestDto) {
    return this.authService.register(registerRequest);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginRequest: LoginRequestDto) {
    return this.authService.login(loginRequest);
  }

  @Post('forgot-password')
  @HttpCode(HttpStatus.OK)
  async forgotPassword(@Body() forgotPasswordRequest: ForgotPasswordRequestDto) {
    return this.authService.forgotPassword(forgotPasswordRequest);
  }

  @Post('reset-password')
  @HttpCode(HttpStatus.OK)
  async resetPassword(@Body() resetPasswordRequest: ResetPasswordRequestDto) {
    return this.authService.resetPassword(resetPasswordRequest);
  }
}
