import { Injectable, NotFoundException } from '@nestjs/common';
import { BookEntity } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book-dto.js';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(BookEntity)
        private readonly bookRepository: Repository<BookEntity>
    ){}

    // Method untuk mendapatkan semua buku
    async findAll(): Promise<BookEntity[]> {
        return await this.bookRepository.find({
            order: { createdAt: 'DESC' },
        });
    }

    // Alias untuk findall
    async findall(): Promise<BookEntity[]> {
        return this.findAll();
    }

    // Method untuk mendapatkan satu buku berdasarkan ID
    async findOne(id: string): Promise<BookEntity> {
        const book = await this.bookRepository.findOneBy({ id });
        if (!book) {
            throw new NotFoundException(`Buku dengan ID ${id} tidak ditemukan`);
        }
        return book;
    }

    // Alias untuk findById
    async findById(id: string | number): Promise<BookEntity> {
        return this.findOne(String(id));
    }

    // Method untuk menambahkan buku baru
    async create(book: CreateBookDto): Promise<BookEntity> {
        const newBook = this.bookRepository.create(book);
        return await this.bookRepository.save(newBook);
    }

    // Alias untuk createBook
    async createBook(book: CreateBookDto): Promise<BookEntity> {
        return this.create(book);
    }

    // Method untuk memperbarui data buku
    async update(id: string, updateBookDto: Partial<CreateBookDto>): Promise<BookEntity> {
        const book = await this.findOne(id);
        const updatedBook = this.bookRepository.merge(book, updateBookDto);
        return await this.bookRepository.save(updatedBook);
    }

    // Alias untuk updateBook
    async updateBook(id: string | number, updatedBook: Partial<CreateBookDto>): Promise<BookEntity> {
        return this.update(String(id), updatedBook);
    }

    // Method untuk menghapus buku (soft delete)
    async delete(id: string): Promise<{ message: string; deletedId: string }> {
        await this.findOne(id);
        await this.bookRepository.softDelete(id);

        return {
            message: 'Buku berhasil dihapus',
            deletedId: id,
        };
    }

    // Alias untuk deleteBook
    async deleteBook(id: string | number): Promise<{ message: string; deletedId: string }> {
        return this.delete(String(id));
    }
}
