import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, MinLengthValidator, PatternValidator, FormGroup, FormGroupName } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserDetailsDto } from '../dto/UserRegistrationDto'
import { UserService } from '../service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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

  constructor(private service: UserService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void { }

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

  confirmPasswordFormControl = new FormControl('',
    Validators.required,
    MinLengthValidator.apply,

  );

  emailFormControl = new FormControl('',
    Validators.required,
    PatternValidator.apply,
  );

  mobileNumberFormControl = new FormControl('',
    Validators.required,
    PatternValidator.apply,
  );

  userRegistrationForm = new FormGroup({
    firstName: this.firstNameFormControl,
    lastName: this.lastNameFormControl,
    userName: this.userNameFormControl,
    password: this.passwordFormControl,
    confirmPassword: this.confirmPasswordFormControl,
    mobileNumber: this.mobileNumberFormControl,
    email: this.emailFormControl

  });

  public registerNow() {
    let response = this.service.doRegistration(new UserDetailsDto(this.userRegistrationForm.get("firstName").value,
      this.userRegistrationForm.get("lastName").value, this.userRegistrationForm.get("userName").value,
      this.userRegistrationForm.get("password").value, this.userRegistrationForm.get("mobileNumber").value,
      this.userRegistrationForm.get("email").value));

    if (this.userRegistrationForm.get("password").value !== this.userRegistrationForm.get("confirmPassword").value) {
      this.message = "Password and confirm Password not matched";
      this.snackBar.open(this.message, this.message.action, {
        duration: 5000,
        verticalPosition: 'top', horizontalPosition: 'center', panelClass: ['red-snackbar']
      });
    } else {
      response.subscribe((data) => {
        this.router.navigate(['user/login']), this.snackBar.open(this.message = data, this.message.action, {
          duration: 5000,
          verticalPosition: 'top', horizontalPosition: 'center', panelClass: ['red-snackbar']
        })
      });
    }
  }
}
