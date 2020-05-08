import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, MinLengthValidator, EmailValidator} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  hide=true;
  
  constructor() { }

  ngOnInit(): void {
  }

  passwordFormControl = new FormControl('',
  Validators.required,
  MinLengthValidator.apply,
  );

  cofirmPasswordFormControl = new FormControl('',
    Validators.required,
    MinLengthValidator.apply,  
  );
  
  matcher = new MyErrorStateMatcher();

}
