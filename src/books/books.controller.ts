import { Controller,Get } from '@nestjs/common';

@Controller('books')
export class BooksController {
    @Get()
    getBooks(): string {
        return 'List of books';
    }
}
