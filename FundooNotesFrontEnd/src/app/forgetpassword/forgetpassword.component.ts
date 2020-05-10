import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { UserRegistrationService } from '../service/user-registration.service';
import { ForgetPasswordDto } from '../dto/ForgetPasswordDto';
import { MatSnackBarModule } from '@angular/material/snack-bar'

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})

export class ForgetpasswordComponent implements OnInit {

  message;

  constructor(private forgetPasswordService: UserRegistrationService) { }

  ngOnInit(): void {
    }
    
    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);

    forgetPasswordGroup =  new FormGroup({
      emailId: this.emailFormControl
    });
  
     matcher = new MyErrorStateMatcher();

    forgetPassword(){
      let response = this.forgetPasswordService.forgetPassword(new ForgetPasswordDto(this.forgetPasswordGroup.get('emailId').value));
      response.subscribe((data)=>this.message=data);
    }
}
