import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, type Relation } from "typeorm";
import { BookEntity } from "../../books/entities/book-entity.js";
import { AuthorEntity } from "../../authors/entities/author-entity.js";

@Entity('book_authors')
export class BookAuthorsEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @ManyToOne(() => BookEntity, (book) => book.bookAuthors)
    @JoinColumn({name:'book_id'})
    book: Relation<BookEntity>;

    @Column({type:'uuid'})
    book_id: string;

    @ManyToOne(() => AuthorEntity, (author) => author.bookAuthors)
    @JoinColumn({name:'author_id'})
    author: Relation<AuthorEntity>;

    @Column({type:'uuid'})
    author_id: string;

}