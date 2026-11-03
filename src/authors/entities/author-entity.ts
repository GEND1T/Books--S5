import { Column, CreateDateColumn, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BookEntity } from "../../books/entities/book-entity.js";
import { BookAuthorsEntity } from "../../book_authors/entities/book_authors-entity.js";


@Entity('authors')
export class AuthorEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type:'varchar', length:150})
    name: string;

    @OneToMany(() => BookAuthorsEntity, (bookAuthor) => bookAuthor.author)
    bookAuthors: BookAuthorsEntity[];

    @CreateDateColumn({name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name:'update_at'})
    updateAt: Date;
}