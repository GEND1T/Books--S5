import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, type Relation } from "typeorm";
import { OrderEntity } from "../../orders/entities/orders-entity.js";

@Entity('shipments')
export class ShipmentsEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => OrderEntity, (order) => order.shipment, {onDelete: 'CASCADE'})
    @JoinColumn({name:'order_id'})
    order: Relation<OrderEntity>;

    @Column({type:'uuid'})
    order_id: string;

    @Column({type:'varchar', length:100})
    courier: string;

    @Column({type:'varchar', length:100, nullable:true})
    tracking_number: string;

    @Column({type:'varchar', length:30})
    status: string;

    @Column({type:'timestamp', nullable:true})
    shipped_at: Date;

    @Column({type:'timestamp', nullable:true})
    delivered_at: Date;
}