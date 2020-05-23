import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {

  listOfNotes = [];

  constructor(private router: Router, private noteApiService: UserService) {

  }

  ngOnInit(): void {
    this.showNotes();
  }

  showNotes() {
    let response = this.noteApiService.showNotes();
    response.subscribe((data) => this.listOfNotes = data)
  }
}
