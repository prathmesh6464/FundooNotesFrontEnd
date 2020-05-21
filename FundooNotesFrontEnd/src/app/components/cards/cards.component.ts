import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IconsComponent } from '../icons/icons.component';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements AfterContentInit {


  listOfNotes = [];

  constructor(private icon: IconsComponent) { }

  ngAfterContentInit(): void {
    this.listOfNotes = this.icon.listOfNotes
    console.log("xxxxxx " + this.listOfNotes);
  }

  titleNoteFormControl = new FormControl('', [
    Validators.required,
  ]);

  descriptionNoteFormControl = new FormControl('',
    Validators.required,
  );

  noteFormGroup = new FormGroup({
    title: this.titleNoteFormControl,
    description: this.descriptionNoteFormControl
  });

  // receiveOutput($event) {
  //   this.listOfNotes = $event;
  // }
}
