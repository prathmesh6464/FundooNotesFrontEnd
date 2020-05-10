export class ResetPasswordDto {
    password;
    confirmPassword;
     constructor(password: String, confirmPassword: String) {
         this.password = password;
         this.confirmPassword = confirmPassword;
     }
}