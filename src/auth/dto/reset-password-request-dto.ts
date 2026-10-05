export class ResetPasswordRequestDto {
    email: string;
    newPassword: string;
    newPasswordConfirmation: string;
    token: string;
}