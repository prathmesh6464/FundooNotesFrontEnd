export class UserDetailsDto {
    firstName;
    lastName;
    userName;
    password;
    mobileNumber;
    emailId;
    constructor  (firstName: String, lastName: String, userName: String,
    password: String, mobileNumber: String, emailId: String ) { 

        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
        this.mobileNumber = mobileNumber;
        this.emailId = emailId;
    }
   
}