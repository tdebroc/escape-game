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
  styleUrls: ['./livingroom1.component.css']
})
export class Livingroom1Component implements OnInit {
  rootEl;
  invaders: Invader[] = [];
  bullets: Bullet[] = [];
  currentX = 0;
  currentY = 0;
  X_LASER_OFFSET = 224;
  Y_LASER_OFFSET = 100;
  BULLET_OFFSET_LEFT = 35;
  constructor(private gameService : GameService,
              private router: Router) {
    this.gameService.loadGame();
  }

  ngOnInit(): void {
    if (this.isLaserGameOn()) {
      this.prepareLaserGame();
    }
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
        left:  e.pageX - this.X_LASER_OFFSET,
        top:   e.pageY - this.Y_LASER_OFFSET
      });
    });
    this.initInvaders();
    this.loopThrewBullets();
    this.makeExplosion();
  }

  private makeExplosion() {
    this.gameService.playSound("explosion.wav");
    if (!this.isLaserGameOn()) {
      return;
    }
    setTimeout(this.makeExplosion.bind(this),
      Math.random() * 6000 + 1000);
  }

  isLaserSelected() {
    return this.gameService.isItemSelected(AppConstants.LASER);
  }

  shootLaser() {
    console.log("Shoot")
    let audio = new Audio();
    audio.src = "assets/sounds/shoot.wav";
    audio.load();
    audio.play();
    this.throwBullet();
  }


  private throwBullet() {
    let bullet = new Bullet(this.currentX - this.X_LASER_OFFSET, this.currentY - this.Y_LASER_OFFSET);
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
    let audio = new Audio();
    audio.src = "assets/sounds/fastinvader3.wav";
    audio.load();
    audio.play();
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
}
