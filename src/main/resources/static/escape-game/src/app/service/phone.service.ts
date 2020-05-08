import { Injectable } from '@angular/core';
import {AppConstants} from "../app.constants";
import {GameService} from "./game.service";

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  invadersToSnap = [
    {left : 372, top : 313, width : 41, height: 106, score : 642, legend : 'DUDE', song : "the-dude.mp3"},
    {left : 545, top : 260, width : 59, height: 56, score : 799, legend : 'BEER', song : "beer-song.mp3"},
    {left : 505, top : 330, width : 20, height: 20, score : 664, legend : 'PARIS', song : "edith-piaf-sous-le-ciel-de-paris.mp3"},
    {left : 566, top : 280, width : 56, height: 68, score : 934, legend : 'MUSHROOM', song : "the-mushroom-song-original-song-by-eric-butler.mp3"},
    {left : 259, top : 324, width : 256, height: 248, score : 442, legend : 'SurFer Atlantic Coast', song : "the-beach-boys-surfer-girl.mp3"},
    {left : 259, top : 284, width : 134, height: 159, score : 512, legend : "MOUNTAIN", song : "the-misty-mountains-cold-the-hobbit.mp3"},
    {left : 330, top : 300, width : 200, height: 150, score : 230, legend : "XX'X A XXAXX XXXXX", song : "its-a-small-world-after.mp3"},
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
    return this.getPhone() ? this.getPhone().totalScore : 0;
  }

  getSumOfScores() {
    let sum = 0;
    for (let i = 0; i < this.invadersToSnap.length; i++) {
      sum += this.invadersToSnap[i].score;
    }
    return sum;
  }

  getNewPhone() {
    let phone = {};
    phone["totalScore"] = 0;
    phone[AppConstants.PHONE_ITEM_INVADERS] = {};
    phone["zoomUrl"] = "/phone-invaders";
    return phone;
  }
}
