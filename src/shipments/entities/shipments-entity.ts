import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrderEntity } from "../../orders/entities/orders-entity.js";

@Entity('shipments')
export class ShipmentsEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => OrderEntity, (order) => order.shipment, {onDelete: 'CASCADE'})
    @JoinColumn({name:'order_id'})
    order: OrderEntity;

    @Column({type:'uuid'})
    order_id: string;

    @Column({type:'varchar', length:100})
    courier: string;

    @Column({type:'varchar', length:100, nullable:true})
    tracking_number: string;

    @Column({type:'varchar', length:30})
    status: string;

    @Column({type:'datetime', nullable:true})
    shipped_at: Date;

    @Column({type:'datetime', nullable:true})
    delivered_at: Date;
}