import { Module } from '@nestjs/common';
import { AuthorsController } from './authors.controller.js';
import { AuthorsService } from './authors.service.js';
import { AuthorEntity } from './entities/author-entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorEntity])],
  controllers: [AuthorsController],
  providers: [AuthorsService],
  exports: [TypeOrmModule]
})
export class AuthorsModule {}
