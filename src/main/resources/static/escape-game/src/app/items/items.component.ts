import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/game.service';
import { AppConstants } from "../app.constants";
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  constructor(private gameService : GameService,
              private router: Router,
              private route: ActivatedRoute,
              private _location: Location,) { }

  ngOnInit(): void {
  }

  getItems() {
    return this.gameService.getCurrentItems();
  }
  selectItem(name) {
    this.gameService.selectItem(name);
  }
  isItemSelected(name) {
    return this.gameService.isItemSelected(name);
  }
  saveGame() {
    this.gameService.saveGame();
  }
  loadGame() {
    this.gameService.loadGame();
  }

  isPhone(key) {
    return key == AppConstants.PHONE_ITEM;
  }

  clickPhoneMagnifyingGlass() {
    if (this.router.url === "/phone-invaders") {
      this._location.back();
    } else {
      this.router.navigate(['/phone-invaders']);
    }
  }
}
