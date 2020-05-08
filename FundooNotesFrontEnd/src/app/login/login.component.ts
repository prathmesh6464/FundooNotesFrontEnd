import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, MinLengthValidator} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

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
  constructor() { }

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
  
  matcher = new MyErrorStateMatcher();

}
