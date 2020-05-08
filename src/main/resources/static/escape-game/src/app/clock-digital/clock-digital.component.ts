import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-digital',
  templateUrl: './clock-digital.component.html',
  styleUrls: ['./clock-digital.component.css']
})
export class ClockDigitalComponent implements OnInit {
  timer = "";
  constructor() { this.changeTime(); }

  ngOnInit(): void {

  }

  inInvaderLetter(el: string) {
    return ['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F'].indexOf(el.toUpperCase()) != -1;
  }

  changeTime() {
    this.timer = (new Date).toTimeString().substring(0,8);
    setTimeout(()=>{
      this.changeTime()
    }, 50);
  }

}
