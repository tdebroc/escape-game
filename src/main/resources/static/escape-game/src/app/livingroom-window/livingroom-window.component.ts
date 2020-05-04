import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-livingroom-window',
  templateUrl: './livingroom-window.component.html',
  styleUrls: ['./livingroom-window.component.css']
})
export class LivingroomWindowComponent implements OnInit {
  windowId;
  constructor(private route: ActivatedRoute,
              private _location: Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.windowId = params.get('windowId');
    });
  }

  backClicked() {
    this._location.back();
  }
}
