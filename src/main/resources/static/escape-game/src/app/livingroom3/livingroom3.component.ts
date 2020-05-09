import { Component, OnInit } from '@angular/core';
import {GameService} from "../service/game.service";
import {AppConstants} from "../app.constants";
import {Router} from "@angular/router";

@Component({
  selector: 'app-livingroom3',
  templateUrl: './livingroom3.component.html',
  styleUrls: ['./livingroom3.component.css']
})
export class Livingroom3Component implements OnInit {

  constructor(private gameService : GameService,
              private router : Router) {
    this.gameService.stopCurrentMusic();
  }

  ngOnInit(): void {
    this.gameService.stopCurrentMusic();
  }

  openTv() {
    if (this.gameService.isItemSelected(AppConstants.REMOTE)) {
      this.router.navigate(['/watching-tv'])
    }
  }

  clickOnCrackedWall() {
    $(".cracked-wall-text").show();
  }
}
