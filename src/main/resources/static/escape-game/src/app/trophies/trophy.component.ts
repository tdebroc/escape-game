import { Component, OnInit, HostListener } from '@angular/core';
import {GameService} from "../service/game.service";
import {AppConstants} from "../app.constants";
import * as $ from "jquery";


@Component({
  selector: 'app-trophy',
  templateUrl: './trophy.component.html',
  styleUrls: ['./trophy.component.css']
})
export class TrophyComponent implements OnInit {
  trophyY;
  trophyX;

  constructor(public gameService : GameService) { }

  ngOnInit(): void {
  }

  getTrophies() {
    return this.gameService.trophies;
  }

  getSelectedTrophy() {
    return this.gameService.getSelectTrophy();
  }

  isTrophySelected(name) {
    return this.getSelectedTrophy() == name;
  }

  selectTrophy(key: string) {
    if (!this.gameService.hasItemBeenUsed(AppConstants.LASER)) {
      return;
    }
    if (key == this.getSelectedTrophy()) {
      this.gameService.selectedTrophyName = undefined;
    } else {
      this.gameService.selectedTrophyName = key;
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e) {
    this.trophyX = e.pageX - $("#livingroom1-root").offset().left + 70;
    this.trophyY = e.pageY - 80;
  }

  isOnPainting(key: string) {
    return this.gameService.isTrophyOnPainting(key);
  }
}
