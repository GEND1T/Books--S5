import { IsInt, IsNotEmpty, IsPhoneNumber, IsPostalCode, IsString, Length } from "class-validator";

export class CreateCustomerAddressesDto {
    
    @IsNotEmpty({ message: "Nama Penerima harus diisi" })
    @IsString({ message: "Nama Penerima harus berupa huruf" })
    readonly recipientName: string;

    @IsNotEmpty({ message: "Phone harus diisi" })
    @IsInt({ message: "Phone harus berupa angka" })
    @Length(10, 15, { message: "Phone harus memiliki panjang antara 10 hingga 15 karakter" })
    @IsPhoneNumber('ID', { message: "Format nomor telepon internasional tidak valid (gunakan kode negara, misal: +62...)" })  
    readonly phone: string;

    @IsNotEmpty({ message: "Alamat harus diisi" })
    readonly address: string;

    @IsNotEmpty({ message: "Kota harus diisi" })
    readonly city: string;

    @IsNotEmpty({ message: "Kode Pos harus diisi" })
    @IsPostalCode('ID', { message: "Kode Pos tidak valid" })
    readonly postal_code: string;

}