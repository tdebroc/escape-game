import { Injectable } from '@angular/core';
import {AppConstants} from "../app.constants";
import {GameService} from "./game.service";

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  invadersToSnap = [
    {left : 372, top : 313, width : 41, height: 106, score : 642},
    {left : 545, top : 260, width : 59, height: 56, score : 799},
    {left : 505, top : 330, width : 20, height: 20, score : 664},
    {left : 566, top : 280, width : 56, height: 68, score : 934},
    {left : 559, top : 224, width : 56, height: 168, score : 442},
    {left : 259, top : 284, width : 134, height: 159, score : 512},
  ];

  constructor(private gameService : GameService) { }

  getInvadersToSnap() {
    return this.invadersToSnap;
  }

  getPhone() {
    return this.gameService.getCurrentItems()[AppConstants.PHONE_ITEM];
  }

  getInvadersSnapped() {
    return this.getPhone()[AppConstants.PHONE_ITEM_INVADERS];
  }
  hadAlreadyBeenSnapped(invaderId) {
    return this.getInvadersSnapped()[invaderId];
  }
  snapInvader(invaderId, score) {
    this.getInvadersSnapped()[invaderId] = true;
    if (this.hadAlreadyBeenSnapped(invaderId)) {
      this.getPhone().totalScore += score;
    }
  }

  getTotalPoint() {
    return this.getPhone().totalScore;
  }

  getSumOfScores() {
    let sum = 0;
    for (let i = 0; i < this.invadersToSnap.length; i++) {
      sum += this.invadersToSnap[i].score;
    }
    return sum;
  }

}
