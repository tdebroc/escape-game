import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { AppConstants } from '../app.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livingroom1',
  templateUrl: './livingroom1.component.html',
  styleUrls: ['./livingroom1.component.css']
})
export class Livingroom1Component implements OnInit {

  constructor(private gameService : GameService,
              private router: Router) { }

  ngOnInit(): void {
  }

  openDrawer2() {
    if (this.gameService.isItemSelected(AppConstants.KEY_DRAWER1)) {
      this.gameService.useItem(AppConstants.KEY_DRAWER1);
    }
    if (this.gameService.hasItemBeenUsed(AppConstants.KEY_DRAWER1)) {
      this.router.navigate(['/livingroom1drawerPurple']);
    }
  }

}
