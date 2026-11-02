import { Module } from '@nestjs/common';
import { CustomerAddressesController } from './customer-addresses.controller.js';
import { CustomerAddressesService } from './customer-addresses.service.js';

@Module({
  controllers: [CustomerAddressesController],
  providers: [CustomerAddressesService]
})
export class CustomerAddressesModule {}
