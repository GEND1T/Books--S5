import { Module } from '@nestjs/common';
import { CustomerAddressesController } from './customer-addresses.controller.js';
import { CustomerAddressesService } from './customer-addresses.service.js';
import { CustomerEntity } from '../customers/entities/customer-entity.js';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from './entities/customer-address-entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([AddressEntity])],
  controllers: [CustomerAddressesController],
  providers: [CustomerAddressesService],
  exports: [TypeOrmModule]
})
export class CustomerAddressesModule {}
