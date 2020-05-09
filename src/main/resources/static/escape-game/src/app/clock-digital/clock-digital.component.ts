import { Component, OnInit } from '@angular/core';
import {GameService} from "../service/game.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-clock-digital',
  templateUrl: './clock-digital.component.html',
  styleUrls: ['./clock-digital.component.css']
})
export class ClockDigitalComponent implements OnInit {
  timer = "";
  constructor(private gameService : GameService,
              private router : Router) {  }

  ngOnInit(): void {
    this.changeTime();
  }

  inInvaderLetter(el: string) {
    return ['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F'].indexOf(el.toUpperCase()) != -1;
  }

  changeTime() {
    let newDate = (new Date).toTimeString().substring(0,8);
    if (newDate != this.timer) {
      this.timer = newDate;
      this.gameService.playSound("Tick.mp3");
    }
    if (this.router.url != "/clock-digital" ) {
      return;
    }
    setTimeout(()=>{
      this.changeTime()
    }, 50);
  }

}
