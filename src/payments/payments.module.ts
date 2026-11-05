import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller.js';
import { PaymentsService } from './payments.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentsEntity } from './entities/payments-entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentsEntity])],
  controllers: [PaymentsController],
  providers: [PaymentsService],
  exports: [TypeOrmModule]
})
export class PaymentsModule {}
