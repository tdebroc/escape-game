import { Component, OnInit } from '@angular/core';
import { PhoneService } from "../service/phone.service";
import { GameService } from "../service/game.service";
import { AppConstants } from "../app.constants";

@Component({
  selector: 'app-lockergold1',
  templateUrl: './lockergold1.component.html',
  styleUrls: ['./lockergold1.component.css']
})
export class Lockergold1Component implements OnInit {
  code = "0000";
  constructor(private phoneService : PhoneService,
              private gameService : GameService) { }

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
  }

  validate() {
    if (parseInt(this.code) === this.phoneService.getSumOfScores()) {
      this.gameService.usedItems[AppConstants.LOCKER_GOLD_OPENED] = true;
    }
  }
  isLockerOpened() {
    return this.gameService.usedItems[AppConstants.LOCKER_GOLD_OPENED];
  }
}
