import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrderEntity } from "../../orders/entities/orders-entity.js";
import { BookEntity } from "../../books/entities/book-entity.js";

@Entity('order_items')
export class OrderItemsEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({type:'integer'})
    quantity: number;
    
    @Column({type:'decimal', precision: 12, scale: 2})
    price: number;

    @ManyToOne(() => OrderEntity, (order) => order.orderItems, {onDelete: 'CASCADE'})
    @JoinColumn({name:'order_id'})
    order: OrderEntity;

    @ManyToOne(() => BookEntity, (book) => book.orderItems, {onDelete: 'CASCADE'})
    @JoinColumn({name:'book_id'})
    book: BookEntity;

    @Column({type:'uuid'})
    book_id: String;

    @Column({type:'uuid'})
    order_id: String;

    @Column({type:'decimal', precision: 12, scale: 2})
    subtotal: number;

}