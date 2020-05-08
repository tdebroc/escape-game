import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/game.service';
import { AppConstants } from '../app.constants';
import { PhoneService } from "../service/phone.service";

@Component({
  selector: 'app-livingroom1drawer-purple',
  templateUrl: './livingroom1drawer-purple.component.html',
  styleUrls: ['./livingroom1drawer-purple.component.css']
})
export class Livingroom1drawerPurpleComponent implements OnInit {
  AppConstants
  constructor(private gameService : GameService,
              private phoneService : PhoneService) { }

  ngOnInit(): void {
    this.AppConstants = AppConstants;
  }

  takePhone() {
    this.gameService.addItem(AppConstants.PHONE_ITEM, this.phoneService.getNewPhone());
  }

  hasPhoneBeenTaken() {
    return this.gameService.hasItemBeenTaken(AppConstants.PHONE_ITEM);
  }
}
