import { Injectable } from '@nestjs/common';
import { BookEntity } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book-dto.js';

@Injectable()
export class BooksService {

    // contoh data dari database
    private books: BookEntity[] = [
        {
            id: 1,
            name: 'The Great Gatsby',  
            author: 'F. Scott Fitzgerald',
            isbn: '978-0-7432-7356-5',
            publishedYear: 1925,
            isAvailable: true
        },
        {
            id: 2,
            name: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            isbn: '978-0-06-112008-4',
            publishedYear: 1960,
            isAvailable: true
        }
    ];

    //method untuk mendapatkan semua buku
    findAll(): BookEntity[] {
        return this.books;
    }

    findById(id: number): BookEntity | undefined {
        return this.books.find(book => book.id === id);
    }   


    createBook(book: CreateBookDto): BookEntity {
        // logic untuk membuat buku baru dengan ID unik
        const maxId = this.books.length > 0 ? Math.max(...this.books.map(b => b.id)) : 0;
        const newBook: BookEntity = {
            id: maxId + 1,
            name: book.name,
            author: book.author,
            isbn: book.isbn,
            publishedYear: book.publishedYear,
            isAvailable: true
        };

        this.books.push(newBook);
        return newBook;
    }

    updateBook(id: number, updatedBook: Partial<BookEntity>): BookEntity | undefined {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex === -1) {
            return undefined; // Buku tidak ditemukan
        }

        const existingBook = this.books[bookIndex];
        const updatedBookEntity: BookEntity = {
            ...existingBook,
            ...updatedBook
        };

        this.books[bookIndex] = updatedBookEntity;
        return updatedBookEntity;
    }

    deleteBook(id: number): boolean {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex !== -1) {
            this.books.splice(bookIndex, 1);
            return true; // Buku berhasil dihapus
        }
        return false; // Buku tidak ditemukan
    }
}
