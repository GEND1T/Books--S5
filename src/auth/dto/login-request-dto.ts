import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class LoginRequestDto {
    @IsNotEmpty({ message: "Email harus diisi" })
    @IsEmail({}, { message: "Email harus berupa email yang valid" })
    readonly email: string;

    @IsNotEmpty({ message: "Password harus diisi" })
    @MinLength(8, { message: "Password harus memiliki panjang minimal 8 karakter" })
    readonly password: string;
}