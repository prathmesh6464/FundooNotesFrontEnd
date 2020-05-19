import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, MinLengthValidator, EmailValidator, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserService } from '../service/user.service';
import { ResetPasswordDto } from '../dto/ResetPasswordDto';
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
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})

export class ResetpasswordComponent implements OnInit {

  hide = true;
  message: any;
  matcher = new MyErrorStateMatcher();

  constructor(private userResetPasswordService: UserService, private snackBar: MatSnackBar, private router: Router) { }

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

  userResetPasswordGroup = new FormGroup({
    password: this.passwordFormControl,
    confirmPassword: this.cofirmPasswordFormControl,
  });

  resetPasswordNow() {
    let response = this.userResetPasswordService.userResetPassword(new ResetPasswordDto(
      this.userResetPasswordGroup.get('password').value, this.userResetPasswordGroup.get('confirmPassword').value));
    response.subscribe((data) => this.snackBar.open(this.message = data, this.message.action, {
      duration: 5000,
      verticalPosition: 'top', horizontalPosition: 'center', panelClass: ['red-snackbar']
    }));

    if ((this.message.toLowerCase().search("successfully")) != -1) {
      this.router.navigate(['']);
    }
  }

}
