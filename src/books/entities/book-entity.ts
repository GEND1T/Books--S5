import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, type Relation, UpdateDateColumn } from "typeorm";
import { CategoryEntity } from "../../categories/entities/category-entity.js";
import { PublisherEntity } from "../../publishers/entities/publisher-entity.js";
import { BookAuthorsEntity } from "../../book_authors/entities/book_authors-entity.js";
import { OrderItemsEntity } from "../../order_items/entities/order_items-entity.js";

@Entity('books')
export class BookEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type:'varchar', length:64})
    name: string;

    @Column({type:'varchar', length:64})
    author: string;

    @Column({type:'varchar'})
    isbn: string;

    @Column({type:'int'})
    publishedYear: number;

    @Column({type:'boolean', default:true})
    isAvailable: boolean;

    @ManyToOne(() => CategoryEntity, (category) => category.books)
    @JoinColumn({name:'category_id'})
    category: Relation<CategoryEntity>;

    @ManyToOne(() => PublisherEntity, (publisher) => publisher.books)
    @JoinColumn({name:'publisher_id'})
    publisher: Relation<PublisherEntity>;

    @OneToMany(() => BookAuthorsEntity, (bookAuthor) => bookAuthor.book)
    bookAuthors: BookAuthorsEntity[];

    @OneToMany(() => OrderItemsEntity, (orderItem) => orderItem.book)
    orderItems: OrderItemsEntity[];

    @CreateDateColumn({name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name:'update_at'})
    updateAt: Date;

    @DeleteDateColumn({name:'delated_at', nullable:true})
    delatedAt: Date
}