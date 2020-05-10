import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetailsDto} from '../dto/UserRegistrationDto';
import { LoginDto } from '../dto/LoginDto';
import { ResetPasswordDto } from '../dto/ResetPasswordDto';
import { ForgetPasswordDto } from '../dto/ForgetPasswordDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) { }

    public doRegistration(userDetails: UserDetailsDto): Observable<any> {
    return this.http.post("http://localhost:8081/user/userRegistration",userDetails);
  }

   public userLogin(userLoginData: LoginDto): Observable<any> {
    return this.http.post("http://localhost:8081/user/userLogin",userLoginData);
   }

   public userResetPassword(resetPasswordData: ResetPasswordDto): Observable<any> {
    return this.http.put("http://localhost:8081/user/resetPassword", resetPasswordData);
   }

   public forgetPassword(forgetPasswordDto: ForgetPasswordDto): Observable<any> {
    return this.http.post("http://localhost:8081/user/forgetPassword", forgetPasswordDto);
   }
}
