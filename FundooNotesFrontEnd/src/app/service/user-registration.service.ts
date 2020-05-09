import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from '../dto/UserDetails'

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) { }

  //userDetails = new UserDetails("","","","","","");
  public doRegistration(userDetails: UserDetails) {
    return this.http.post("http://localhost:8081/user/userRegistration",userDetails, {responseType: 'text' as 'json'});
  }
}
