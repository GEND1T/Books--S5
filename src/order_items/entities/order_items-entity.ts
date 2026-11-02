import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('order_items')
export class OrderItemsEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({type:'integer'})
    quantity: number;
    
    @Column({type:'decimal', precision: 12, scale: 2})
    price: number;
    
    @Column({type:'decimal', precision: 12, scale: 2})
    subtotal: number;
    
}