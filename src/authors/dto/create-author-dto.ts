import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateAuthorDto {
    @IsNotEmpty({ message: "Name harus diisi" })
    @IsString({ message: "Nama Penerbit harus berupa huruf" })
    readonly name: string;

    @IsNotEmpty({ message: "Silakan pilih buku terlebih dahulu" })
    @MinLength(1, { message: "Silakan pilih buku terlebih dahulu" })
    readonly bookAuthors: string[];
}