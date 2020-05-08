import { Component, OnInit } from '@angular/core';
import {GameService} from "../service/game.service";
import {AppConstants} from "../app.constants";

@Component({
  selector: 'app-insidechestgold',
  templateUrl: './insidechestgold.component.html',
  styleUrls: ['./insidechestgold.component.css']
})
export class InsidechestgoldComponent implements OnInit {

  constructor(private gameService : GameService) { }
  ngOnInit(): void {
  }

  getScrewDriver() {
    this.gameService.addItem(AppConstants.SCREWDRIVER);
  }
  hasScrewDriverBeenTaken() {
    return this.gameService.hasItemBeenTaken(AppConstants.SCREWDRIVER);
  }

  hasHeartBeenTaken() {
    return this.gameService.hasTrophy(AppConstants.HEART);
  }

  addHeart() {
    this.gameService.addTrophy(AppConstants.HEART);
  }
}
