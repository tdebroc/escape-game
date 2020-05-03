import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { AppConstants } from '../app.constants';

@Component({
  selector: 'app-livingroom3drawer1',
  templateUrl: './livingroom3drawer1.component.html',
  styleUrls: ['./livingroom3drawer1.component.css']
})
export class Livingroom3drawer1Component implements OnInit {

  constructor(private gameService : GameService) { }

  ngOnInit(): void {
  }

  addKey() {
    console.log(this.hasKeyBeenTaken());
    this.gameService.addToItem(AppConstants.KEY_DRAWER1);
  }

  hasKeyBeenTaken() {
    return this.gameService.hasItemBeenTaken(AppConstants.KEY_DRAWER1);
  }


}