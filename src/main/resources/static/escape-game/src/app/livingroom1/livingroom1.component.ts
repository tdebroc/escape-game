import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/game.service';
import { AppConstants } from '../app.constants';
import { Router } from '@angular/router';
import * as $ from "jquery";
import {Bullet} from "../model/Bullet";

class Invader {
  x: number;
  y: number;
  height: number;
  width: number;
  letter: String;
}

@Component({
  selector: 'app-livingroom1',
  templateUrl: './livingroom1.component.html',
  styleUrls: ['./livingroom1.component.css',
    './livingroom1-lightrays.component.css',
    './livingroom1-curtains.css']
})
export class Livingroom1Component implements OnInit {
  rootEl;
  invaders: Invader[] = [];
  bullets: Bullet[] = [];
  currentX = 0;
  currentY = 0;
  Y_LASER_OFFSET = 100;
  BULLET_OFFSET_LEFT = 35;
  trophyOnPainting = [
    { x : 120 , y : 46, height: 64, width : 32, name : AppConstants.NURSE_INVADER },
    { x : 50 , y : 0, height: 70, width : 70, name : AppConstants.INFIRMARY_INVADER },
    { x : 120 , y : 0, height: 46, width : 32, name : AppConstants.BANDAID_INVADER },
    { x : 0 , y : 0, height: 50, width : 50, name : AppConstants.SYRINGE_INVADER },
    { x : 90 , y : 70, height: 40, width : 30, name : AppConstants.HEART },
    { x : 50 , y : 70, height: 40, width : 40, name : AppConstants.CARROTS },
    { x : 0 , y : 50, height: 60, width : 50, name : AppConstants.RABBIT },
  ];

  getLeftOffset() {
    return this.rootEl.offset().left;
  }

  constructor(private gameService : GameService,
              private router: Router) {

  }

  ngOnInit(): void {
    if (this.isLaserGameOn()) {
      this.prepareLaserGame();
    }
    this.openCurtain();
  }

  private openCurtain() {
    console.log(this.gameService.hasItemBeenUsed(AppConstants.INTRO_DONE))
    if (this.gameService.hasItemBeenUsed(AppConstants.INTRO_DONE)) {
      return;
    }
    this.gameService.playSound("mario-kart-race-start-gaming-sound-effect-hd.mp3");
    setTimeout(() => {
      $(".rnOuter").addClass("rnInnerOpen");
      this.gameService.useInNSecond(AppConstants.INTRO_DONE, true, 6000);
    }, 3500);
  }

  areCurtainOpened() {
    return this.gameService.hasItemBeenUsed(AppConstants.INTRO_DONE);
  }

  openDrawer2() {
    if (this.gameService.isItemSelected(AppConstants.KEY_DRAWER1)) {
      this.gameService.useItem(AppConstants.KEY_DRAWER1);
    }
    if (this.gameService.hasItemBeenUsed(AppConstants.KEY_DRAWER1)) {
      this.gameService.playSound("close_door.mp3");
      this.router.navigate(['/livingroom1drawerPurple']);
    }
  }

  prepareLaserGame() {
    this.rootEl= $("#livingroom1-root");
    this.rootEl.on('mousemove', (e) => {
      this.currentX = e.pageX;
      this.currentY = e.pageY;
      $('#space-invader-laser').css({
        left:  e.pageX - this.getLeftOffset(),
        top:   e.pageY - this.Y_LASER_OFFSET
      });
    });
    this.initInvaders();
    this.loopThrewBullets();
    this.makeExplosion();
  }

  private makeExplosion() {
    if (!this.isLaserGameOn()) {
      return;
    }
    this.gameService.playSound("explosion.wav");
    setTimeout(this.makeExplosion.bind(this),
      Math.random() * 6000 + 1000);
  }

  isLaserSelected() {
    return this.gameService.isItemSelected(AppConstants.LASER);
  }

  shootLaser() {
    this.gameService.playSound("shoot.wav");
    this.throwBullet();
  }


  private throwBullet() {
    let bullet = new Bullet(this.currentX - this.getLeftOffset(), this.currentY - this.Y_LASER_OFFSET);
    this.bullets.push(bullet);
  }

  private loopThrewBullets() {
    let i = this.bullets.length;
    while (i--) {
      let bullet = this.bullets[i];
      bullet.y -= 1;
      if (bullet.y < 0 || this.touchingInvader(bullet)) {
        this.bullets.splice(i, 1);
      }
    }
    setTimeout(this.loopThrewBullets.bind(this), 4);
  }

  private touchingInvader(bullet: Bullet) {
    for (let i = 0; i < this.invaders.length; i++) {
      let invader = this.invaders[i];
      let bulletX = this.bulletXToInvaderX(bullet.x);
      let bulletY = this.bulletYToInvaderY(bullet);
      if (bulletX > invader.x
          && bulletX < invader.x + invader.width
          && bulletY < invader.y
          && bulletY > invader.y - invader.height) {
        this.killInvader(i);
        return true;
      }
    }
    return false;
  }

  private killInvader(i: number) {
    this.invaders.splice(i, 1);
    this.gameService.playSound("fastinvader3.wav");
    if (this.invaders.length == 0) {
      this.gameService.useItem(AppConstants.LASER)
    }
  }

  bulletXToInvaderX(bulletX) {
    return bulletX - 418 + this.BULLET_OFFSET_LEFT;
  }

  bulletYToInvaderY(bullet) {
    return bullet.y - 95 - 13;
  }

  isLaserGameOn() {
    return this.gameService.isInCurrentItem(AppConstants.LASER);
  }

  getInvaders() {
    return this.invaders;
  }

  private initInvaders() {
    for (let i = 0; i < this.gameService.getInvaderLetters().length; i++) {
      let letter = this.gameService.getInvaderLetters()[i];
      let invader = new Invader();
      invader.letter = letter;
      invader.x = (i % 4) * 37;
      invader.y = (Math.floor(i / 4)) * 27 ;
      invader.height = 23;
      invader.width = 23;
      this.invaders.push(invader);
    }
  }

  isLaserGameWon() {
    return this.gameService.hasItemBeenUsed(AppConstants.LASER);
  }

  placeTrophy(trophyPaint) {
    if (trophyPaint.name == this.gameService.getSelectTrophy()) {
      this.gameService.trophies[trophyPaint.name].onPainting = true;
      this.gameService.selectedTrophyName = undefined;
      if (Object.keys(this.trophyOnPainting).length == this.countTrophiesOnPainting()) {
        this.gameService.addToUsedItem(AppConstants.PAINTING_DONE, true);
        this.gameService.playSound("heavenly-music-gaming-sound-effect-hd.mp3");
      }
    }
  }

  countTrophiesOnPainting() {
    let count = 0;
    for (let trophy in this.gameService.trophies) {
      if (this.gameService.trophies[trophy].onPainting) {
        count ++;
      }
    }
    return count;
  }

  isOnPainting(trophyName) {
    return this.gameService.isTrophyOnPainting(trophyName);
  }

  getBgImage(trophyPaint) {
    return this.isOnPainting(trophyPaint.name) ?
      "url(assets/images/trophies/" + trophyPaint.name + ".png)" : "";
  }

  takeOldGoldKey() {
    this.gameService.addItem(AppConstants.OLD_GOLD_KEY);
  }

  isOldKeyTaken() {
    return this.gameService.hasItemBeenTaken(AppConstants.OLD_GOLD_KEY);
  }

  isPaintingFinished() {
    return this.gameService.hasItemBeenUsed(AppConstants.PAINTING_DONE);
  }

  openDoor() {
    if (this.gameService.isItemSelected(AppConstants.OLD_GOLD_KEY)) {
      return this.gameService.useItem(AppConstants.OLD_GOLD_KEY);
    }
  }

  hasGoldenKeyBeenUsed() {
    return this.gameService.hasItemBeenUsed(AppConstants.OLD_GOLD_KEY);
  }
}
