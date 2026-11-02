import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('shipments')
export class ShipmentsEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

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