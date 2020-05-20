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
  notes = [];
  @Input() noteFormGroup: any;
  @Output() sendOutput = new EventEmitter<GetNotesDto[]>();

  constructor(private noteApiService: UserService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  addNote() {
    let response = this.noteApiService.addNote(new AddNoteDto(this.noteFormGroup.get('title').value,
      this.noteFormGroup.get('description').value));
    response.subscribe((data) => {
      if (data.toLowerCase().search("successfully") != -1) {
        this.noteApiService.showNotes().subscribe(data => this.notes = data);
      } else {
        this.snackBar.open(this.message = "Please Login !!!", data.action, {
          duration: 5000,
          verticalPosition: 'top', horizontalPosition: 'center', panelClass: ['red-snackbar']
        })
      }
    });
  }

  sendOutputEvent() {
    return this.sendOutput.emit(this.notes);
  }
}
