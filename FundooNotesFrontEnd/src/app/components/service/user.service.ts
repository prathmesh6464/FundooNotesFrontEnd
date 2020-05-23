import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetailsDto } from '../dto/UserRegistrationDto';
import { LoginDto } from '../dto/LoginDto';
import { ResetPasswordDto } from '../dto/ResetPasswordDto';
import { ForgetPasswordDto } from '../dto/ForgetPasswordDto';
import { Observable } from 'rxjs';
import { AddNoteDto } from '../dto/AddNoteDto';
import { GetNotesDto } from '../dto/GetNotesDto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public doRegistration(userDetailsDto: UserDetailsDto): Observable<any> {
    return this.http.post("http://localhost:8081/user/registration", userDetailsDto);
  }

  public userLogin(userLoginDto: LoginDto): Observable<any> {
    return this.http.post("http://localhost:8081/user/login", userLoginDto);
  }

  public logIN() {
    return !!localStorage.getItem('token');
  }

  public userResetPassword(resetPasswordDto: ResetPasswordDto): Observable<any> {
    return this.http.put("http://localhost:8081/user/resetPassword", resetPasswordDto);
  }

  public forgetPassword(forgetPasswordDto: ForgetPasswordDto): Observable<any> {
    return this.http.post("http://localhost:8081/user/forgetPassword", forgetPasswordDto);
  }

  public addNote(addNoteDto: AddNoteDto): Observable<any> {
    return this.http.post("http://localhost:8081/notes/add/" + localStorage.getItem('token'), addNoteDto);
  }

  public showNotes(): Observable<any> {
    return this.http.get<GetNotesDto[]>("http://localhost:8081/notes/show/" + localStorage.getItem('token'));
  }
}
