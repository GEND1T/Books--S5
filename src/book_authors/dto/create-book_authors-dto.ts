import { IsNotEmpty } from "class-validator";

export class CreateBookAuthorsDto {
    @IsNotEmpty({ message: "Silakan pilih buku terlebih dahulu" })
    readonly bookId: string;

    @IsNotEmpty({ message: "Silakan pilih penulis terlebih dahulu" })
    readonly authorId: string;
}