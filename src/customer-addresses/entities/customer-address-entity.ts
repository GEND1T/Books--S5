import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    @CreateDateColumn({name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name:'update_at'})
    updateAt: Date;

}