import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BookEntity } from "../../books/entities/book-entity.js";

@Entity('publishers')
export class PublisherEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type:'varchar', length:150})
    name: string;

    @OneToMany(() => BookEntity, (book) => book.publisher)
    books: BookEntity[];

    @CreateDateColumn({name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name:'update_at'})
    updateAt: Date;
}