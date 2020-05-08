import { Component, OnInit, AfterViewInit } from '@angular/core';
import {GameService} from "../service/game.service";

@Component({
  selector: 'app-watchingtv',
  templateUrl: './watchingtv.component.html',
  styleUrls: ['./watchingtv.component.css']
})
export class WatchingtvComponent implements AfterViewInit {
  div;
  leftInvaderPresident;
  topInvaderPresident;
  speech;
  widthCalculated = 0;
  i = 0;
  channel = 1;
  constructor(private gameService : GameService) {
    this.speech = this.getSpeech();
  }

  ngOnInit(): void {

  }
  ngAfterViewInit() : void {

    if (this.channel == 3) {
      this.initShake();
      this.animateSubtitles();
    }
  }
  ngAfterViewChecked():  void {
    this.animateSubtitles();
  }

  switchChannel(add) {
    this.channel += add;
    if (this.channel == 4) this.channel = 1;
    if (this.channel == 0) this.channel = 3;
    this.widthCalculated = 0;
  }

  initSubtitles() {
    let watchingTv = jQuery("#watching-tv");
    let hideLeft = $(".hide-left");
    hideLeft.css("left", - watchingTv.offset().left + "px");
    hideLeft.css("width", watchingTv.offset().left + "px");
    let hideRight = $(".hide-right");
    let rightWidth = $(window).width() - (watchingTv.offset().left + parseInt(watchingTv.css("width")));
    hideRight.css("right", - rightWidth);
    hideRight.css("width", rightWidth+ "px");
  }
  animateSubtitles() {
    let subtitleInnerEl = $(".subtitles-inner");
    let width = subtitleInnerEl.width();
    if (width > this.widthCalculated) {
      this.widthCalculated = width;
      this.initSubtitles();
      subtitleInnerEl
        .css({"left":"0px"})
        .animate({"left": - width}, width * 5, "linear");
    }

  }

  private initShake() {
    this.div = $(".invader-president");
    this.leftInvaderPresident = parseInt(this.div.css("left"))
    this.topInvaderPresident = parseInt(this.div.css("top"))
    //this.shake();
  }

  shake() {
    this.i++;
    if (this.i % 50 > 0 && this.i % 50 < 30)
      this.div.animate({
        left : this.leftInvaderPresident + this.random() + "px",
        top  : this.topInvaderPresident + this.random() + "px"
      }, 100);
    setTimeout(()=>{
      this.shake()
    }, 100);
  }

  random() {
    return Math.round(Math.random() * 40 - 20);
  }

  getSpeech() {
    let speech = "";
    let stc = this.gameService.getStc();
    console.log(stc)
    for (let i = 0; i < stc.length; i++) {
      speech += stc.charCodeAt(i).toString(16);
      speech += " |";
    }
    console.log(speech)
    return speech;
  }

  inInvaderLetter(el) {
    return this.gameService.inInvaderLetter(el);
  }


}
