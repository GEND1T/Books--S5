import { IsNotEmpty, IsEmail } from "class-validator";

export class ForgotPasswordRequestDto {
    @IsNotEmpty({ message: "Email harus diisi" })
    @IsEmail({}, { message: "Email harus berupa email yang valid" })
    readonly email: string;
}