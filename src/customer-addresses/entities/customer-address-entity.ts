import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, type Relation, UpdateDateColumn } from "typeorm";
import { CustomerEntity } from "../../customers/entities/customer-entity.js";

@Entity('addresses')
export class AddressEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type:'varchar', length:150})
    recipient_name: string;

    @Column({type:'varchar', length:20})
    phone: string;

    @Column({type:'text'})
    address: string;

    @Column({type:'varchar', length:100})
    city: string;

    @Column({type:'varchar', length:10})
    postal_code: string;

    @ManyToOne(() => CustomerEntity, (customer) => customer.addresses, {onDelete: 'CASCADE'})
    @JoinColumn({name:'customer_id'})
    customer: Relation<CustomerEntity>;

    @CreateDateColumn({name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name:'update_at'})
    updateAt: Date;

}