import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service.js';
import { CreateBookDto } from './dto/create-book-dto.js';
import { BookEntity } from './entities/book-entity.js';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Get()
  getBooks() {
    return this.bookService.findAll();
  }

  @Get(':id')
  getBookById(@Param('id', ParseIntPipe) id: number) {
    const book = this.bookService.findById(id);
    if (!book) {
      throw new NotFoundException(`Buku dengan ID ${id} tidak ditemukan`);
    }
    return book;
  }

  @Post()
  createBook(@Body() book: CreateBookDto) {
    return this.bookService.createBook(book);
  }

  @Put(':id')
  updateBook(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatedBook: Partial<BookEntity>,
  ) {
    const book = this.bookService.updateBook(id, updatedBook);
    if (!book) {
      throw new NotFoundException(`Buku dengan ID ${id} tidak ditemukan`);
    }
    return book;
  }

  @Delete(':id')
  deleteBook(@Param('id', ParseIntPipe) id: number) {
    const deleted = this.bookService.deleteBook(id);
    if (!deleted) {
      throw new NotFoundException(`Buku dengan ID ${id} tidak ditemukan`);
    }
    return { message: 'Buku berhasil dihapus' };
  }
}