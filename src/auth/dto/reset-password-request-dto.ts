import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class ResetPasswordRequestDto {
    @IsNotEmpty({ message: "Email harus diisi" })
    @IsEmail({}, { message: "Email harus berupa email yang valid" })
    readonly email: string;

    @IsNotEmpty({ message: "Password baru harus diisi" })
    @MinLength(8, { message: "Password baru harus memiliki panjang minimal 8 karakter" })    
    readonly newPassword: string;

    @IsNotEmpty({ message: "Konfirmasi password baru harus diisi" })
    @MinLength(8, { message: "Konfirmasi password baru harus memiliki panjang minimal 8 karakter" })
    readonly newPasswordConfirmation: string;

    token: string;
}