import { IsInt, IsNotEmpty, Min } from "class-validator";

export class CreateOrderItemsDto {
    @IsNotEmpty({ message: "Silakan pilih order terlebih dahulu" })
    readonly orderId: string;

    @IsNotEmpty({ message: "Silakan pilih buku terlebih dahulu" })
    readonly bookId: string;

    @IsNotEmpty({ message: "Silakan masukkan jumlah pembelian" })
    @IsInt({ message: "Jumlah pembelian harus berupa angka" })
    @Min(1, { message: "Jumlah pembelian harus lebih dari 0" })
    readonly quantity: number;

    @IsNotEmpty({ message: "Silakan masukkan harga buku" })
    @IsInt({ message: "Harga buku harus berupa angka" })
    @Min(0, { message: "Harga buku harus lebih dari 0" })
    readonly price: number;

    @IsNotEmpty({ message: "Silakan masukkan subtotal" })
    @IsInt({ message: "Subtotal harus berupa angka" })
    readonly subtotal: number;
}