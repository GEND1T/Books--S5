import { IsInt, IsNotEmpty } from "class-validator";
import { CreateBookAuthorsDto } from "../../book_authors/dto/create-book_authors-dto.js";

export class CreateBookDto {
    @IsNotEmpty({ message: "Name harus diisi" })
    readonly name: string;
    @IsNotEmpty({ message: "Author harus diisi" })
    readonly author: string;
    @IsNotEmpty({ message: "ISBN harus diisi" })
    readonly isbn: string;
    @IsNotEmpty({ message: "Tahun terbit harus diisi" })
    @IsInt({ message: "Tahun terbit harus berupa angka" })
    readonly publishedYear: number;

    @IsNotEmpty({ message: "Silakan pilih kategori terlebih dahulu" })
    readonly categories: string[];
    @IsNotEmpty({ message: "Silakan pilih penerbit terlebih dahulu" })
    readonly publisher: string;
    @IsNotEmpty({ message: "Silakan pilih penulis terlebih dahulu" })
    readonly bookAuthors: CreateBookAuthorsDto[];
}