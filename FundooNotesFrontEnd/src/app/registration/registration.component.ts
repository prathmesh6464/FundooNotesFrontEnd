import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, MinLengthValidator, PatternValidator, FormGroup, FormGroupName} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { UserDetailsDto } from '../dto/UserRegistrationDto'
import { UserRegistrationService } from '../service/user-registration.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  message: any;
  matcher = new MyErrorStateMatcher();

  constructor(private service: UserRegistrationService, private snackBar: MatSnackBar) { }

  ngOnInit(): void { }

  firstNameFormControl= new FormControl('', 
    Validators.required,
    PatternValidator.apply,
  );

  lastNameFormControl= new FormControl('', 
    Validators.required,
    PatternValidator.apply,
  );

  userNameFormControl= new FormControl('', 
    Validators.required,
    PatternValidator.apply,
  );

  passwordFormControl= new FormControl('',
  Validators.required,
  MinLengthValidator.apply,
  );

  cofirmPasswordFormControl= new FormControl('',
    Validators.required,    
    MinLengthValidator.apply,
    
  );

  emailFormControl= new FormControl('', 
    Validators.required,
    PatternValidator.apply,
  );

  mobileNumberFormControl= new FormControl('',
    Validators.required,
    PatternValidator.apply,
  );

  userRegistrationForm = new FormGroup({
    firstName: this.firstNameFormControl,
  lastName: this.lastNameFormControl, 
  userName: this.userNameFormControl,
  password: this.passwordFormControl,
  cofirmPassword: this.cofirmPasswordFormControl,
  mobileNumber: this.mobileNumberFormControl,
  emailId: this.emailFormControl

  });
  
  public registerNow(){
    let response = this.service.doRegistration( new UserDetailsDto(this.userRegistrationForm.get("firstName").value,
    this.userRegistrationForm.get("lastName").value, this.userRegistrationForm.get("userName").value,
    this.userRegistrationForm.get("password").value, this.userRegistrationForm.get("mobileNumber").value,
    this.userRegistrationForm.get("emailId").value));
    response.subscribe((data)=>this.snackBar.open(this.message=data, this.message.action, {duration: 5000}));
  }
}
