import { Component, OnInit } from '@angular/core';
import {GameService} from "../service/game.service";
import {AppConstants} from "../app.constants";

@Component({
  selector: 'app-under-sofa-right',
  templateUrl: './under-sofa-right.component.html',
  styleUrls: ['./under-sofa-right.component.css']
})
export class UnderSofaRightComponent implements OnInit {

  constructor(private gameService : GameService) { }

  ngOnInit(): void {
  }

  takeNurse() {
    this.gameService.addTrophy(AppConstants.NURSE_INVADER);
  }

  isNurseTaken() {
    return this.gameService.hasTrophy(AppConstants.NURSE_INVADER);
  }
}
