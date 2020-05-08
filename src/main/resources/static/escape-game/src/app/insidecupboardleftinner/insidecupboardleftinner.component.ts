import { Component, OnInit } from '@angular/core';
import {GameService} from "../service/game.service";
import {AppConstants} from "../app.constants";

@Component({
  selector: 'app-insidecupboardleftinner',
  templateUrl: './insidecupboardleftinner.component.html',
  styleUrls: ['./insidecupboardleftinner.component.css']
})
export class InsidecupboardleftinnerComponent implements OnInit {

  constructor(private gameService : GameService) { }

  ngOnInit(): void {
  }

  takeRemote() {
    this.gameService.addItem(AppConstants.REMOTE);
  }

  hasRemoteBeenTaken() {
    return this.gameService.hasItemBeenTaken(AppConstants.REMOTE);
  }

  hasGrimoireBeenTaken() {
    return this.gameService.hasItemBeenTaken(AppConstants.GRIMOIRE);
  }
  takeGrimoire() {
    this.gameService.currentItems[AppConstants.GRIMOIRE] = {
      zoomUrl : "/read-grimoire"
    };
  }
}
