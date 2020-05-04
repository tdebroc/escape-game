import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/game.service';
import { AppConstants } from '../app.constants';

@Component({
  selector: 'app-livingroom1drawer-purple',
  templateUrl: './livingroom1drawer-purple.component.html',
  styleUrls: ['./livingroom1drawer-purple.component.css']
})
export class Livingroom1drawerPurpleComponent implements OnInit {
  AppConstants
  constructor(private gameService : GameService) { }

  ngOnInit(): void {
    this.AppConstants = AppConstants;
  }

  takePhone() {
    let opt = {};
    opt["totalScore"] = 0;
    opt[AppConstants.PHONE_ITEM_INVADERS] = {};
    this.gameService.addItem(AppConstants.PHONE_ITEM, opt);
  }

  hasPhoneBeenTaken() {
    return this.gameService.hasItemBeenTaken(AppConstants.PHONE_ITEM);
  }
}
