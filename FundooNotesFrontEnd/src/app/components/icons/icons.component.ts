import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  close = false;
  constructor() { }

  ngOnInit(): void {
  }

  closeNote() {
    this.close = !this.close;
    if (this.close) {
      console.log(this.close);
      window.location.reload();
    }
  }
}
