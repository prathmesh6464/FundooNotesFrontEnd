import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators, MinLengthValidator} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { UserRegistrationService } from '../service/user-registration.service';
import { LoginDto } from '../dto/LoginDto';
import { MatSnackBar } from '@angular/material/snack-bar';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide=true;
  message: any;
  matcher = new MyErrorStateMatcher();

  constructor(private loginApiService: UserRegistrationService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  userNameFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('',
  Validators.required,
  MinLengthValidator.apply,
  );  

  userLoginFormGroup = new FormGroup({
    userName: this.userNameFormControl,
    password: this.passwordFormControl 
  });
  
  loginNow() {
    let response = this.loginApiService.userLogin(new LoginDto(this.userLoginFormGroup.get('userName').value, 
    this.userLoginFormGroup.get('password').value)); 
    response.subscribe((data)=>this.message=data);
    this.snackBar.open(this.message, this.message.action, {duration: 5000});
    }
}
