import { Component, OnInit } from '@angular/core';
import {GameService} from "../service/game.service";
import {AppConstants} from "../app.constants";

@Component({
  selector: 'app-jukebox',
  templateUrl: './jukebox.component.html',
  styleUrls: ['./jukebox.component.css']
})
export class JukeboxComponent implements OnInit {
  song;
  wrongAnswer = false;
  showInfirmaryTrophy = false;

  constructor(private gameService : GameService) { }

  ngOnInit(): void {
  }

  launchSong() {
    if (this.song && this.gameService.getTheJukeBoxMusic().toLowerCase() === this.song.toLowerCase()) {
      this.wrongAnswer = false;
      this.gameService.playMusic("its-a-small-world-after.mp3");
      this.showInfirmaryTrophy = true;
    } else {
      this.wrongAnswer = true;
    }
  }

  takeInfirmaryTrophy() {
    this.gameService.addTrophy(AppConstants.INFIRMARY_INVADER);
  }

  shouldShowInfirmaryTrophy() {
    return this.showInfirmaryTrophy && !this.gameService.hasTrophy(AppConstants.INFIRMARY_INVADER)
  }
}
