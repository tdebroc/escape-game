import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { AppConstants } from '../app.constants';

@Component({
  selector: 'app-livingroom1drawer-purple',
  templateUrl: './livingroom1drawer-purple.component.html',
  styleUrls: ['./livingroom1drawer-purple.component.css']
})
export class Livingroom1drawerPurpleComponent implements OnInit {

  constructor(private gameService : GameService) { }

  ngOnInit(): void {
  }

  takePhone() {
    this.gameService.addItem(AppConstants.PHONE_ITEM, {});
  }
}
