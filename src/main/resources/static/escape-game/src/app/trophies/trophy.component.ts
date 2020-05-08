import { Component, OnInit } from '@angular/core';
import {GameService} from "../service/game.service";
import {AppConstants} from "../app.constants";

@Component({
  selector: 'app-trophy',
  templateUrl: './trophy.component.html',
  styleUrls: ['./trophy.component.css']
})
export class TrophyComponent implements OnInit {
  trophySelected;

  constructor(private gameService : GameService) { }

  ngOnInit(): void {
  }

  getTrophies() {
    return this.gameService.trophies;
  }

  isTrophySelected(name) {
    return this.trophySelected == name;
  }

  selectTrophy(key: string) {
    if (!this.gameService.hasItemBeenUsed(AppConstants.LASER)) {
      return;
    }
    this.trophySelected = key;
  }
}
