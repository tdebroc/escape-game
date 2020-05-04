import { Component, OnInit } from '@angular/core';
import { PhoneService } from "../service/phone.service";

@Component({
  selector: 'app-phone-invaders',
  templateUrl: './phone-invaders.component.html',
  styleUrls: ['./phone-invaders.component.css']
})
export class PhoneInvadersComponent implements OnInit {

  constructor(private phoneService : PhoneService) { }

  ngOnInit(): void {
  }

  getTotalPoint() {
    return this.phoneService.getTotalPoint();
  }

  getSnappedInvaders() {
    return this.phoneService.getInvadersSnapped();
  }

  countInvaders() {
    return Object.keys(this.phoneService.getInvadersSnapped()).length;
  }



}
