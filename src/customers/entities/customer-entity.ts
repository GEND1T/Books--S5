import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AddressEntity } from "../../customer-addresses/entities/customer-address-entity.js";
import { OrderEntity } from "../../orders/entities/orders-entity.js";

@Entity('customers')
export class CustomerEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type:'varchar', length:150})
    name: string;

    @Column({type:'varchar', length:150, unique:true})
    email: string;

    @Column({type:'varchar', length:20})
    phone: string;

    @OneToMany(() => AddressEntity, (item) => item.customer, {cascade: true})
    addresses: AddressEntity[];

    @OneToMany(() => OrderEntity, (item) => item.customer, {cascade: true})
    orders: OrderEntity[];

    @CreateDateColumn({name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name:'update_at'})
    updateAt: Date;

    @DeleteDateColumn({name:'deleted_at', nullable:true})
    deletedAt: Date
}