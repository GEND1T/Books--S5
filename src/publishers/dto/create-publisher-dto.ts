import { IsNotEmpty, IsString } from "class-validator";

export class CreatePublisherDto {
    @IsNotEmpty({ message: "Nama Penerbit harus diisi" })
    @IsString({ message: "Nama Penerbit harus berupa huruf" })
    readonly name: string;
}