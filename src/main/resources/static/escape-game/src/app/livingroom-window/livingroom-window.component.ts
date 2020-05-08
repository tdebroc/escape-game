import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {GameService} from "../service/game.service";
import * as $ from 'jquery';
import {AppConstants} from "../app.constants";
import {PhoneService} from "../service/phone.service";

@Component({
  selector: 'app-livingroom-window',
  templateUrl: './livingroom-window.component.html',
  styleUrls: ['./livingroom-window.component.css']
})
export class LivingroomWindowComponent implements OnInit {
  windowId;
  invadersToSnap;

  constructor(private route: ActivatedRoute,
              private _location: Location,
              private gameService : GameService,
              private phoneService : PhoneService) {
    this.invadersToSnap = this.phoneService.getInvadersToSnap();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.windowId = params.get('windowId');
    });

    $(".livingroom-window-root").on('mousemove', function(e){
      $('.phone-for-picture').css({
        left:  e.pageX - $(".livingroom-window-root").offset().left - 35,
        top:   e.pageY - 100
      });
    });
    this.playSong();
  }

  backClicked() {
    this._location.back();
  }

  isPhoneSelected() {
    return this.gameService.isItemSelected(AppConstants.PHONE_ITEM);
  }

  snapInvader() {
    if (!this.gameService.isItemSelected(AppConstants.PHONE_ITEM)) {
      return;
    }
    this.takePicture();
    if (!this.phoneService.hadAlreadyBeenSnapped(this.windowId)) {
      this.phoneService.snapInvader(this.windowId, this.getCurrentInvader().score);
      this.showScore();
    }
  }

  getCurrentInvader() {
    return this.invadersToSnap[this.windowId];
  }

  showScore() {
    let pictureFlash = $( "#scoreToAdd" )
    pictureFlash.show();
    pictureFlash.fadeOut( 5000, function() {
      $( "#picture-flash" ).hide();
    });
  }

  takePicture() {
    let pictureFlash = $( "#picture-flash" )
    pictureFlash.show();
    pictureFlash.fadeOut( "slow", function() {
      $( "#picture-flash" ).hide();
    });
    this.gameService.playSound("appareil-photo.mp3")
  }

  inInvaderLetter(el: string) {
    return ['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F'].indexOf(el) != -1;
  }

  playSong() {
    this.gameService.playMusic(this.getCurrentInvader().song);
  }
}
