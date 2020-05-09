import {Component, OnInit} from '@angular/core';
import {AppConstants} from "../app.constants";
import {Router} from "@angular/router";
import {GameService} from "../service/game.service";

@Component({
  selector: 'app-livingroom4',
  templateUrl: './livingroom4.component.html',
  styleUrls: ['./livingroom4.component.css']
})
export class Livingroom4Component implements OnInit {
  constructor(private router: Router,
              private gameService : GameService) {
  }

  ngOnInit(): void {
    this.gameService.stopCurrentMusic();
  }

  goToChest() {
    if (this.gameService.hasItemBeenUsed(AppConstants.LOCKER_GOLD_OPENED)) {
      this.router.navigate(["/inside-chest-gold"]);
    } else {
      this.router.navigate(["/lockergold1"]);
    }
  }

  goInsideComputer() {
    if (this.gameService.hasItemBeenUsed(AppConstants.COMPUTER_OPENED)) {
      this.router.navigate(["/inside-computer-secured"]);
    } else {
      this.router.navigate(["/inside-computer-login"]);
    }
  }

  shouldShowSushis() {
    return !this.gameService.hasItemBeenTaken(AppConstants.SUSHIS);
  }

  takeSushis() {
    this.gameService.addItem(AppConstants.SUSHIS);
  }
}
