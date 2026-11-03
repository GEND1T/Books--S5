import { IsNotEmpty } from "class-validator";

export class CreateBookAuthorsDto {
    @IsNotEmpty({ message: "Silakan pilih buku terlebih dahulu" })
    readonly book_id: string;

    @IsNotEmpty({ message: "Silakan pilih penulis terlebih dahulu" })
    readonly author_id: string;


}