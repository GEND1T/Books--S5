import { Module } from '@nestjs/common';
import { PublishersController } from './publishers.controller.js';
import { PublishersService } from './publishers.service.js';
import { PublisherEntity } from './entities/publisher-entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PublisherEntity])],
  controllers: [PublishersController],
  providers: [PublishersService]
})
export class PublishersModule {}
