import { Component, OnInit } from '@angular/core';
import { GameService } from "../service/game.service";
import {AppConstants} from "../app.constants";

@Component({
  selector: 'app-inside-wood-cupboard-left',
  templateUrl: './inside-wood-cupboard-left.component.html',
  styleUrls: ['./inside-wood-cupboard-left.component.css']
})
export class InsideWoodCupboardLeftComponent implements OnInit {
  currentPass = "";
  constructor(private gameService : GameService) { }

  ngOnInit(): void {
  }

  clickCell(line: number, col: number) {
    let cellId = "" + (col + (line - 1) * 3);
    if (cellId == "10") cellId = 'A';
    if (cellId == "11") cellId = '0';
    if (cellId == "12") cellId = 'B';
    this.currentPass += cellId;
    console.log(this.currentPass);
  }

  openSafe() {
    if (this.currentPass == this.gameService.getTopSecretCode()) {
      this.gameService.addToUsedItem(AppConstants.IS_SAFE_OPENED, true);
    }
    this.currentPass = "";
  }

  isSafeOpened() {
    return this.gameService.hasItemBeenUsed(AppConstants.IS_SAFE_OPENED);
  }

  takeSyringue() {
    this.gameService.addTrophy(AppConstants.SYRINGE_INVADER);
  }

  isSyringueTaken() {
    return this.gameService.hasTrophy(AppConstants.SYRINGE_INVADER);
  }

  takeLaser() {
    this.gameService.addItem(AppConstants.LASER);
  }

  isLaserTaken() {
    return this.gameService.hasItemBeenTaken(AppConstants.LASER);
  }
}
