import { Component, OnInit } from '@angular/core';
import {GameService} from "../service/game.service";
import {AppConstants} from "../app.constants";
import{Router} from "@angular/router";

@Component({
  selector: 'app-livingroom2',
  templateUrl: './livingroom2.component.html',
  styleUrls: ['./livingroom2.component.css']
})
export class Livingroom2Component implements OnInit {

  constructor(private gameService : GameService,
              private router : Router) { }

  ngOnInit(): void {}

  openWoodPlank() {
    if (this.gameService.isItemSelected(AppConstants.SCREWDRIVER)) {
      this.gameService.useItem(AppConstants.SCREWDRIVER);
    }
    if (this.gameService.hasItemBeenUsed(AppConstants.SCREWDRIVER)) {
      this.router.navigate(["/inside-cupboard-left-inner"]);
    }
  }

  hasWoodPlankBeenOpened() {
    return this.gameService.hasItemBeenUsed(AppConstants.SCREWDRIVER);
  }
}
