import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-grimoire',
  templateUrl: './read-grimoire.component.html',
  styleUrls: ['./read-grimoire.component.css']
})
export class ReadGrimoireComponent implements OnInit {
  page = 1;
  constructor() { }

  ngOnInit(): void {
  }

  changePage() {
    this.page = (this.page == 2) ? 1 : (this.page + 1);
  }
}
