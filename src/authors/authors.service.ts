import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthorEntity } from './entities/author-entity.js';
import { CreateAuthorDto } from './dto/create-author-dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorsService {
    constructor(
        @InjectRepository(AuthorEntity)
        private readonly authorRepository: Repository<AuthorEntity>
    ) {}

    //menampilkan semua data penulis
    async findAllAuthors(): Promise<AuthorEntity[]> {
        // Implementasi logika untuk menampilkan semua data penulis
        return await this.authorRepository.find();
    }

    // Alias untuk findAll
    async findAll(): Promise<AuthorEntity[]> {
        return this.findAllAuthors();
    }

    //menampilkan data penulis berdasarkan id
    async findOne(id: string): Promise<AuthorEntity> {
        // Implementasi logika untuk menampilkan data penulis berdasarkan id
        if (!id) {
            throw new NotFoundException(`Author ID is required`);
        }
        const author = await this.authorRepository.findOne({ where: { id } });
        if (!author) {
            throw new NotFoundException(`Author with id ${id} not found`);
        }
        return author;
    }

    // Alias untuk findById
    async findById(id: string): Promise<AuthorEntity> {
        return this.findOne(id);
    }

    //menambahkan data penulis baru
    async create(author: CreateAuthorDto): Promise<AuthorEntity> {
        // Implementasi logika untuk menambahkan data penulis baru
        const { bookAuthors, ...authorData } = author;
        const newAuthor = this.authorRepository.create(authorData);
        return await this.authorRepository.save(newAuthor);
    }

    // Alias untuk createAuthor
    async createAuthor(author: CreateAuthorDto): Promise<AuthorEntity> {
        return this.create(author);
    }

    //mengubah data penulis berdasarkan id
    async updateAuthor(id: string, authorData: Partial<CreateAuthorDto>): Promise<AuthorEntity> {
        // Implementasi logika untuk mengubah data penulis berdasarkan id
        const existingAuthor = await this.findOne(id);
        const { bookAuthors, ...updateData } = authorData;
        const updatedAuthor = this.authorRepository.merge(existingAuthor, updateData);
        return await this.authorRepository.save(updatedAuthor);
    }

    // Alias untuk update
    async update(id: string, authorData: Partial<CreateAuthorDto>): Promise<AuthorEntity> {
        return this.updateAuthor(id, authorData);
    }

    //menghapus data penulis berdasarkan id
    async remove(id: string): Promise<{ message: string; id: string }> {
        // Implementasi logika untuk menghapus data penulis berdasarkan id
        const existingAuthor = await this.findOne(id);
        await this.authorRepository.remove(existingAuthor);
        return { message: `Author with id ${id} removed successfully`, id };
    }

    // Alias untuk delete
    async delete(id: string): Promise<{ message: string; id: string }> {
        return this.remove(id);
    }
}
