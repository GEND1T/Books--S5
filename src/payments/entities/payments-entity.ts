import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('payments')
export class PaymentsEntity {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

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