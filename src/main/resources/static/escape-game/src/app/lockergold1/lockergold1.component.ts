import { Component, OnInit } from '@angular/core';
import { PhoneService } from "../service/phone.service";
import { GameService } from "../service/game.service";
import { AppConstants } from "../app.constants";
import { Router } from '@angular/router';

@Component({
  selector: 'app-lockergold1',
  templateUrl: './lockergold1.component.html',
  styleUrls: ['./lockergold1.component.css']
})
export class Lockergold1Component implements OnInit {
  code = "0000";
  constructor(private phoneService : PhoneService,
              private gameService : GameService,
              private router: Router) { }

  ngOnInit(): void {
  }

   replaceAt(string, index, replacement) {
    return string.substr(0, index) + replacement+ string.substr(index + 1);
  }

  increment(number: number) {
    let char = this.code.charAt(number);
    let oldNum = parseInt(char);
    let newNum = oldNum == 9 ? 0 : (oldNum + 1);
    this.code = this.replaceAt(this.code, number, newNum);
    this.validate();
  }

  validate() {
    if (parseInt(this.code) === this.phoneService.getSumOfScores()) {
      this.gameService.usedItems[AppConstants.LOCKER_GOLD_OPENED] = true;
      this.gameService.useItem(AppConstants.PHONE_ITEM);
      this.gameService.playSound("Chest-Creak.wav");
      this.router.navigate(["/inside-chest-gold"]);
    }
  }
  isLockerOpened() {
    return this.gameService.usedItems[AppConstants.LOCKER_GOLD_OPENED];
  }
}
