export class UserDetailsDto {
    firstName;
    lastName;
    userName;
    password;
    mobileNumber;
    email;
    constructor(firstName: String, lastName: String, userName: String,
        password: String, mobileNumber: String, email: String) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
        this.mobileNumber = mobileNumber;
        this.email = email;
    }

}
