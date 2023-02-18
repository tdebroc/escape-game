import { Component, OnInit } from '@angular/core';
import {GameService} from "../service/game.service";
import {AppConstants} from "../app.constants";

@Component({
  selector: 'app-inside-computer-secured',
  templateUrl: './inside-computer-secured.component.html',
  styleUrls: ['./inside-computer-secured.component.css']
})
export class InsideComputerSecuredComponent implements OnInit {
  SAVE_KEY = "dataSavedDuringInvaderGame";
  showPostIt = false;
  constructor(private gameService : GameService) {
    this.loadDataIfExist();
    if (localStorage.getItem("hasWonSpaceInvader") == "true") {
      localStorage.removeItem("hasWonSpaceInvader");
      this.gameService.addToUsedItem(AppConstants.SPACE_INVADERS_WON, true);
    }
  }

  ngOnInit(): void {

  }

  goToSpaceInvaderGame() {
    this.saveCurrentDataBeforeInvaderGame();
    location.href = location.pathname + "vintage-space-invaders"
  }

  getTopSecretCode() {
    return this.gameService.getTopSecretCode();
  }

  getBandAid() {
    this.gameService.addTrophy(AppConstants.BANDAID_INVADER);
  }

  isBandAidTaken() {
    return this.gameService.hasTrophy(AppConstants.BANDAID_INVADER);
  }

  isTopSecretOpen() {
    return this.gameService.hasItemBeenUsed(AppConstants.SPACE_INVADERS_WON);
  }

  openToSecret() {
    if (!this.isTopSecretOpen()) {
      return;
    }
    this.showPostIt = true;
  }

  private loadDataIfExist() {
    let item = localStorage.getItem(this.SAVE_KEY);
    if (item) {
      this.gameService.loadData(item);
      localStorage.removeItem(this.SAVE_KEY)
    }
  }

  private saveCurrentDataBeforeInvaderGame() {
    localStorage.setItem(this.SAVE_KEY, JSON.stringify(this.gameService.getData()));
  }
}






