import { Component, OnInit } from '@angular/core';
import {AppConstants} from "../app.constants";

@Component({
  selector: 'app-door-opened-game-won',
  templateUrl: './door-opened-game-won.component.html',
  styleUrls: ['./door-opened-game-won.component.css']
})
export class DoorOpenedGameWonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  trophies = [
    { x : 550 , y : 456, height: 164, width : 64, name : AppConstants.NURSE_INVADER },
    { x : 350 , y : 480, height: 70, width : 70, name : AppConstants.INFIRMARY_INVADER },
    { x : 0 , y : 480, height: 46, width : 32, name : AppConstants.BANDAID_INVADER },
    { x : 0 , y : 480, height: 50, width : 50, name : AppConstants.SYRINGE_INVADER },
    { x : 462 , y : 147, height: 40, width : 30, name : AppConstants.HEART },
    { x : 70 , y : 70, height: 80, width : 80, name : AppConstants.CARROTS },
    { x : 500 , y : 430, height: 30, width : 25, name : AppConstants.RABBIT },
  ];
}
