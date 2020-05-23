import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../service/user.service';
import { AddNoteDto } from '../dto/AddNoteDto';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginComponent } from '../login/login.component';
import { GetNotesDto } from '../dto/GetNotesDto';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  message: String;
  listOfNotes = [];

  @Input() noteFormGroup: any;

  @Output() sendOutput = new EventEmitter<any>();

  constructor(private snackBar: MatSnackBar, private noteApiService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  addNote() {
    let response = this.noteApiService.addNote(new AddNoteDto(this.noteFormGroup.get('title').value,
      this.noteFormGroup.get('description').value));
    response.subscribe((data) => {
      if (data.toLowerCase().search("successfully") != -1) {
        this.snackBar.open(this.message = data, data.action, {
          duration: 5000,
          verticalPosition: 'top', horizontalPosition: 'center', panelClass: ['red-snackbar']
        })
      } else {
        this.snackBar.open(this.message = "Note not added !!!", data.action, {
          duration: 5000,
          verticalPosition: 'top', horizontalPosition: 'center', panelClass: ['red-snackbar']
        })
      }
    });
  }
}
