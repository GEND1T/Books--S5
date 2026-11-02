import { IsEmail, IsInt, IsNotEmpty, IsPhoneNumber, Length } from "class-validator";

export class CreateCustomerDto {
    @IsNotEmpty({ message: "Name harus diisi" })
    @Length(3, 150, { message: "Name harus memiliki panjang antara 3 hingga 150 karakter" })
    readonly name: string;

    @IsNotEmpty({ message: "Email harus diisi" })
    @IsEmail({}, { message: "Email tidak valid" })
    readonly email: string;

    @IsNotEmpty({ message: "Phone harus diisi" })
    @IsInt({ message: "Phone harus berupa angka" })
    @Length(10, 15, { message: "Phone harus memiliki panjang antara 10 hingga 15 karakter" })
    @IsPhoneNumber('ID', { message: "Format nomor telepon internasional tidak valid (gunakan kode negara, misal: +62...)" })  
    readonly phone: string;
}