import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class RegisterRequestDto {

    @IsNotEmpty({ message: "Name harus diisi" })
    @IsString({ message: "Name harus berupa huruf" })
    readonly name: string;


    @IsNotEmpty({ message: "Email harus diisi" })
    @IsEmail({}, { message: "Email harus berupa email yang valid" })
    readonly email: string;


    @IsNotEmpty({ message: "Password harus diisi" })
    @MinLength(8, { message: "Password harus memiliki panjang minimal 8 karakter" })
    readonly password: string;


    @IsNotEmpty({ message: "Password confirmation harus diisi" })
    readonly passwordConfirmation: string;
}