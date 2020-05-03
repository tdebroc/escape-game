import { Component, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('startText') startTextEl;

  constructor() { }

  ngOnInit(): void {

    const target = document.querySelector('#startText')
    const writer = new Typewriter(target, {
      loop: false,
      typeColor: 'white',
      typeSpeed: 60
    });
    setTimeout(function() {
      writer.type('The Ministry Of Defense Has Examined More Than 15 000 Alleged Sightings of Flying Saucers And Another Unidentified Flying Objects Over Paris Since 1959 And Is Still Keeping An Open Mind On The Existence Of Aliens. In 2005, More Than 350 000 People Were In The Street Of Paris For The Technoparade. Suddenly, Coming From The Sky, A Flying Object Approached And Hovered Overhead.<br/><br/><br/>Now we know the truth ........  SPACE INVADERS ARE BACK<br/><br/>')
        .start();
    }, 1500)

    let audio = new Audio();
    audio.src = "assets/mp3/space-invaders-are-back.mp3";
    audio.load();
    audio.play();
  }





}
