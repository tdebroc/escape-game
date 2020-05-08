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

  isZoomabledItem(key: string) {
    return this.getItems()[key].zoomUrl;
  }

  clickMagnifyingGlass(key: string) {
    if (this.router.url === this.getItems()[key].zoomUrl) {
      this._location.back();
    } else {
      this.router.navigate([this.getItems()[key].zoomUrl]);
    }
  }
}
