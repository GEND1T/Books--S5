
import { IsNotEmpty, IsNumber, IsPositive, Length } from "class-validator";

export class CreateOrdersDto { 

    @IsNotEmpty({ message: "Order number harus diisi" })
    @Length(8, 30, { message: 'Panjang nomor pesanan tidak sesuai standar' })
    readonly order_number : string;

    @IsNotEmpty({ message: "Status harus diisi" }) 
    readonly status : string;

    @IsNotEmpty({ message: "Total amount harus diisi" })
    @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Total pembayaran harus berupa angka valid' })
    @IsPositive({ message: "Total amount harus lebih besar dari 0" })
    readonly total_amount : number;
}