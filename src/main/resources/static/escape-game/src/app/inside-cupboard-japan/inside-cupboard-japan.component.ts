import { Component, OnInit } from '@angular/core';
import {GameService} from "../service/game.service";
import {AppConstants} from "../app.constants";

@Component({
  selector: 'app-inside-cupboard-japan',
  templateUrl: './inside-cupboard-japan.component.html',
  styleUrls: ['./inside-cupboard-japan.component.css']
})
export class InsideCupboardJapanComponent implements OnInit {

  constructor(private gameService : GameService) { }

  ngOnInit(): void {
  }

  shouldShowRabbit() {
    return !this.gameService.hasTrophy(AppConstants.RABBIT)
      && this.gameService.hasItemBeenUsed(AppConstants.SUSHIS);
  }
  takeRabbit() {
    this.gameService.addTrophy(AppConstants.RABBIT);
  }

  clickOnCatJapanStatue() {
    if (this.gameService.isItemSelected(AppConstants.SUSHIS)) {
      this.gameService.useItem(AppConstants.SUSHIS);
    }
  }

  shouldShowSushis() {
    return this.gameService.hasItemBeenUsed(AppConstants.SUSHIS);
  }
}
