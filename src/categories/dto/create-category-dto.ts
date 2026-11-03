import { IsNotEmpty, Length } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty({ message: "Name harus diisi" })
    @Length(3, 64, { message: "Name harus memiliki panjang antara 3 hingga 64 karakter" })
    readonly name: string;

    @IsNotEmpty({ message: "Silakan pilih buku terlebih dahulu" })
    readonly books: string[];
}