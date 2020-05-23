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

  userUrl = "http://localhost:8081/user/";
  notesUrl = "http://localhost:8081/notes/";

  constructor(private http: HttpClient) { }

  public doRegistration(userDetailsDto: UserDetailsDto): Observable<any> {
    return this.http.post(this.userUrl + "registration", userDetailsDto);
  }

  public userLogin(userLoginDto: LoginDto): Observable<any> {
    return this.http.post(this.userUrl + "login", userLoginDto);
  }

  public logIN() {
    return !!localStorage.getItem('token');
  }

  public userResetPassword(resetPasswordDto: ResetPasswordDto): Observable<any> {
    return this.http.put(this.userUrl + "resetPassword", resetPasswordDto);
  }

  public forgetPassword(forgetPasswordDto: ForgetPasswordDto): Observable<any> {
    return this.http.post(this.userUrl + "forgetPassword", forgetPasswordDto);
  }

  public addNote(addNoteDto: AddNoteDto): Observable<any> {
    return this.http.post(this.notesUrl + "add/" + localStorage.getItem('token'), addNoteDto);
  }

  public showNotes(): Observable<any> {
    return this.http.get<GetNotesDto[]>(this.notesUrl + "show/" + localStorage.getItem('token'));
  }
}
