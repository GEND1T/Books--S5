import { IsInt, IsNotEmpty } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty({ message: "Name harus diisi" })
    readonly name: string;
}