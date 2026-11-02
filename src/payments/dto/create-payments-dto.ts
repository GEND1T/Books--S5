import { IsNotEmpty, IsNumber, Min } from "class-validator";

export class CreatePaymentsDto {
    @IsNotEmpty({ message: "Jumlah pembayaran harus diisi" })
    @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Amount harus berupa angka valid' })
    @Min(0, { message: "Jumlah pembayaran harus lebih besar dari 0" })  
    readonly amount: number;

    @IsNotEmpty({ message: "Metode pembayaran harus diisi" })
    readonly payment_method: string;

    @IsNotEmpty({ message: "Status pembayaran harus diisi" })
    readonly status: string;

    @IsNotEmpty({ message: "Pesanan harus diisi" })
    readonly orderId: string;
}