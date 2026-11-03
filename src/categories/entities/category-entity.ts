import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BookEntity } from "../../books/entities/book-entity.js";

@Entity('categories')
export class CategoryEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type:'varchar', length:64})
    name: string;

    @OneToMany(() => BookEntity, (book) => book.category)
    books: BookEntity[];
    
    @CreateDateColumn({name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name:'update_at'})
    updateAt: Date;

}