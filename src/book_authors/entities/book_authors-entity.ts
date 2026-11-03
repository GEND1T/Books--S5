import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { BookEntity } from "../../books/entities/book-entity.js";
import { AuthorEntity } from "../../authors/entities/author-entity.js";


@Entity('book_authors')
export class BookAuthorsEntity {
    
    @ManyToOne(() => BookEntity, (book) => book.bookAuthors)
    @JoinColumn({name:'book_id'})
    book: BookEntity;
    book_id: string;

    @ManyToOne(() => AuthorEntity, (author) => author.bookAuthors)
    @JoinColumn({name:'author_id'})
    author: AuthorEntity;
    author_id: string;

}