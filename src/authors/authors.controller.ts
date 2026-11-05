import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AuthorsService } from './authors.service.js';
import { CreateAuthorDto } from './dto/create-author-dto.js';

@Controller('authors')
export class AuthorsController {
    constructor(
        private readonly authorsService: AuthorsService
    ) {}

    //menampilkan semua data author
    @Get()
    getAllAuthors() {
        return this.authorsService.findAllAuthors();
    }

    @Get('all')
    getAllAuthorsAlias() {
        return this.authorsService.findAllAuthors();
    }

    //menampilkan data author berdasarkan id
    @Get(':id')
    getAuthorById(@Param('id') id: string) {
        return this.authorsService.findOne(id);
    }

    //menambahkan data author baru
    @Post()
    createAuthor(@Body() author: CreateAuthorDto) {
        return this.authorsService.create(author);
    }

    //mengubah data author berdasarkan id
    @Put(':id')
    updateAuthor(@Param('id') id: string, @Body() authorData: Partial<CreateAuthorDto>) {
        return this.authorsService.updateAuthor(id, authorData);
    }

    @Post(':id')
    updateAuthorPost(@Param('id') id: string, @Body() authorData: Partial<CreateAuthorDto>) {
        return this.authorsService.updateAuthor(id, authorData);
    }

    //menghapus data author berdasarkan id
    @Delete(':id')
    removeAuthor(@Param('id') id: string) {
        return this.authorsService.remove(id);
    }

    @Post(':id/delete')
    removeAuthorPost(@Param('id') id: string) {
        return this.authorsService.remove(id);
    }
}
