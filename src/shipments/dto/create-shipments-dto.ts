import { IsNotEmpty } from "class-validator";

export class CreateShipmentsDto {

    @IsNotEmpty({ message: "Order ID harus diisi" })
    readonly orderId: string;
    
    @IsNotEmpty({ message: "Status harus diisi" })
    readonly status: string;

    @IsNotEmpty({ message: "Nomor pelacakan harus diisi" })
    readonly trackingNumber: string;

    @IsNotEmpty({ message: "Kurir harus diisi" })
    readonly courier: string;

    @IsNotEmpty({ message: "Tanggal estimasi pengiriman harus diisi" })
    readonly estimatedDeliveryDate: Date;
}