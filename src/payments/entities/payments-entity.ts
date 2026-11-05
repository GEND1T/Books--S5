import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, type Relation } from "typeorm";
import { OrderEntity } from "../../orders/entities/orders-entity.js";

@Entity('payments')
export class PaymentsEntity {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => OrderEntity, (order) => order.payments, {onDelete: 'CASCADE'})
    @JoinColumn({name:'order_id'})
    order: Relation<OrderEntity>;

    @Column({type:'varchar', length:50})
    payment_method: string;

    @Column({type:'decimal', precision:12, scale:2})
    amount: number;

    @Column({type:'varchar', length:30})
    status: string;

    @Column({type:'timestamp', nullable:true})
    paid_at: Date;

    @Column({type:'timestamp'})
    created_at: Date;
}