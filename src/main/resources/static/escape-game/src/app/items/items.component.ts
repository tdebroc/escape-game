import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  constructor(private gameService : GameService) { }

  ngOnInit(): void {
  }

  getItems() {
    return this.gameService.getCurrentItems();
  }
  selectItem(name) {
    this.gameService.selectItem(name);
  }
  isItemSelected(name) {
    return this.gameService.isItemSelected(name);
  }


}
