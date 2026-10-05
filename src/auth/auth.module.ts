import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module.js';

@Module({
  controllers: [AuthController],

  providers: [AuthService],

  imports: [
    JwtModule.registerAsync({
    useFactory: (configService: ConfigService) => ({
      secret: configService.get('JWT_SECRET'),
      signOptions: {
        expiresIn: configService.get('JWT_EXPIRES_IN'),
      },
    }),
    inject: [ConfigService],
  }),
   UsersModule
  ],

  exports: [AuthService, JwtModule],
})


export class AuthModule {}
