import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CustomerEntity } from "../../customers/entities/customer-entity.js";
import { OrderItemsEntity } from "../../order_items/entities/order_items-entity.js";
import { PaymentsEntity } from "../../payments/entities/payments-entity.js";

@Entity('orders')
export class OrderEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type:'varchar', length:50, unique:true})
    order_number: string;

    @Column({type:'varchar', length:30})
    status: string;

    @Column({type:'decimal', precision:12, scale:2})
    total_amount: number;
    
    @ManyToOne(() => CustomerEntity, (customer) => customer.orders, {onDelete: 'CASCADE'})
    @JoinColumn({name:'customer_id'})
    customer: CustomerEntity;

    @OneToMany(() => OrderItemsEntity, (item) => item.order, {cascade: true})
    orderItems: OrderItemsEntity[];

    @OneToOne(() => PaymentsEntity, (payment) => payment.order, {cascade: true})
    @JoinColumn({name:'payment_id'})
    payments: PaymentsEntity;

    @CreateDateColumn({name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name:'updated_at'})
    updatedAt: Date;
}
