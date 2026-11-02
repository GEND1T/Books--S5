import { IsNotEmpty, IsString } from "class-validator";

export class CreateAuthorDto {
    @IsNotEmpty({ message: "Name harus diisi" })
    @IsString({ message: "Nama Penerbit harus berupa huruf" })
    readonly name: string;
}