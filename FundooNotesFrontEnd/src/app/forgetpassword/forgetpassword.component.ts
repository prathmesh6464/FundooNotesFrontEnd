import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { UserService } from '../service/user.service';
import { ForgetPasswordDto } from '../dto/ForgetPasswordDto';
import { MatSnackBar } from '@angular/material/snack-bar'

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
  matcher = new MyErrorStateMatcher();

  constructor(private forgetPasswordService: UserService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    }
    
    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);

    forgetPasswordGroup =  new FormGroup({
      emailId: this.emailFormControl
    });
  
    forgetPassword(){
      let response = this.forgetPasswordService.forgetPassword(new ForgetPasswordDto(this.forgetPasswordGroup.get('emailId').value));
      
      response.subscribe((data)=>this.snackBar.open(this.message=data, this.message.action, {duration: 5000, 
       verticalPosition: 'top', horizontalPosition: 'center', panelClass: ['red-snackbar']}));     
      
    }
}
