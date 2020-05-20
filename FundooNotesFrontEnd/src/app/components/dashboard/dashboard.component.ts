import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { AddNoteDto } from '../dto/AddNoteDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isMenuOpen = false;
  contentMargin = 240;
  viewClick = true;
  view = "list_view";
  refreshValue = false;
  refreshVeiw = "refresh";
  viewTitle = false;
  message: string;
  notes = [];

  constructor(private noteApiService: UserService, private router: Router) { }
  ngOnInit(): void {
  }

  onToolBarToggle() {

    this.isMenuOpen = !this.isMenuOpen;

    if (!this.isMenuOpen) {
      this.contentMargin = 95;
    }
    else {
      this.contentMargin = 280;
    }
  }

  changeView(): String {
    this.viewClick = !this.viewClick;
    if (this.viewClick) {
      return this.view = "view_list";
    } else {
      return this.view = "grid_on";
    }
  }

  refresh(): String {
    this.refreshValue = !this.refreshValue;
    if (this.refreshValue) {
      window.location.reload();
      return this.refreshVeiw = "cloud_done";
    } else {
      return this.refreshVeiw;
    }
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

  receiveOutput($event) {
    this.notes = $event;
  }
}