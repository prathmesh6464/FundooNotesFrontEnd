export class LoginDto {
    userName;
    password;
    constructor(userName: String, password: String) {
        this.userName=userName;
        this.password=password;
    }   
}
