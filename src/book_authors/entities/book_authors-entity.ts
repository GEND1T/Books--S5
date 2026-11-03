import { Entity, JoinColumn, ManyToMany, ManyToOne } from "typeorm";
import { BookEntity } from "../../books/entities/book-entity.js";


@Entity('book_authors')
export class BookAuthorsEntity {
    
    @ManyToOne(() => BookEntity, (book) => book.bookAuthors)
    @JoinColumn({name:'book_id'})
    book: BookEntity;
    book_id: string;

    author_id: string;
}