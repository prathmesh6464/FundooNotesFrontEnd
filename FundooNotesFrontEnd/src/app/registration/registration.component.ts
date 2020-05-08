import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, MinLengthValidator, EmailValidator, MaxLengthValidator, PatternValidator} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  hide = true;
  constructor() { }

  ngOnInit(): void {
  } 
  
  firstNameFormControl = new FormControl('', 
    Validators.required,
    PatternValidator.apply,
  );

  lastNameFormControl = new FormControl('', 
    Validators.required,
    PatternValidator.apply,
  );

  userNameFormControl = new FormControl('', 
    Validators.required,
    PatternValidator.apply,
  );

  passwordFormControl = new FormControl('',
  Validators.required,
  MinLengthValidator.apply,
  );

  cofirmPasswordFormControl = new FormControl('',
    Validators.required,
    MinLengthValidator.apply,  
  );

  emailFormControl = new FormControl('', 
    Validators.required,
    PatternValidator.apply
  );

  mobileNumberFormControl = new FormControl('',
    Validators.required,
    PatternValidator.apply,
  ); 

  matcher = new MyErrorStateMatcher();
}
