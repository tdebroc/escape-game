import {Component, OnInit, HostListener} from '@angular/core';
import {GameService} from '../service/game.service';
import {AppConstants} from "../app.constants";
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import * as $ from "jquery";

export class ItemToHold {
  name: String;
  rootEl: String;
  location: String;
  x: number;
  y: number;
}

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  currentItemToHold: ItemToHold;
  pageCloseable = [
    '/emptydrawer', '/livingroom3drawer1', '/livingroom1drawerPurple',
    '/phone-invaders', '/inside-cupboard-left-inner',
    '/watching-tv', "/read-grimoire", '/inside-wood-cupboard-left', '/japan-expo'
  ]
  itemsToHold: ItemToHold[] = [
    {
      name: AppConstants.KEY_DRAWER1,
      location: "/livingroom1",
      rootEl: "#livingroom1-root",
      x: 0,
      y: 0,
    },
    {
      name: AppConstants.OLD_GOLD_KEY,
      location: "/livingroom1",
      rootEl: "#livingroom1-root",
      x: 0,
      y: 0,
    },
    {
      name: AppConstants.REMOTE,
      location: "/livingroom3",
      rootEl: "#livingroom3-root",
      x: 0,
      y: 0,
    },
    {
      name: AppConstants.SCREWDRIVER,
      location: "/livingroom2",
      rootEl: "#livingroom2-root",
      x: 0,
      y: 0,
    },
    {
      name: AppConstants.SUSHIS,
      location: "/japan-expo",
      rootEl: ".inside-wood-cupboard-right",
      x: 0,
      y: 0,
    }
  ];
  public hasItemToHold: boolean = false;

  constructor(private gameService: GameService,
              private router: Router,
              private route: ActivatedRoute,
              private _location: Location,) {
  }


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

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e) {
    let itemToHold = false;
    for (let i = 0; i < this.itemsToHold.length; i++) {
      let currentItem = this.itemsToHold[i];
      if (this.isItemSelected(currentItem.name) &&
          this.router.url == currentItem.location) {
        itemToHold = true;
        this.holdItem(currentItem, e);
      }
    }
    this.hasItemToHold = itemToHold;
  }

  private holdItem(itemsToHold, e: any) {
    let rootEl = $(itemsToHold.rootEl);
    this.currentItemToHold = itemsToHold;
    this.currentItemToHold.x = e.pageX - rootEl.offset().left - rootEl.width() - 25;
    this.currentItemToHold.y = e.pageY - 80;
  }

  resetGame() {
    this.gameService.resetGame();
  }

  closePage() {
    this._location.back();
  }

  showClosePage() {
    return this.pageCloseable.indexOf(this.router.url) > -1;
  }
}
