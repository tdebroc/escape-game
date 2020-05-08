import {Component, OnInit} from '@angular/core';
import {GameService} from "../service/game.service";
import {Router} from "@angular/router";
import {AppConstants} from "../app.constants";

@Component({
  selector: 'app-inside-computer-login',
  templateUrl: './inside-computer-login.component.html',
  styleUrls: ['./inside-computer-login.component.css']
})
export class InsideComputerLoginComponent implements OnInit {
  login;
  password;
  wrongAnswer = false;

  constructor(private gameService : GameService,
              private router : Router) { }

  ngOnInit(): void {

  }

  doLogin() {
    if (this.gameService.getStc().toUpperCase().replace("I AM ", "") == this.login.toUpperCase() &&
        this.password.toUpperCase() == "DECAF") {
      this.gameService.usedItems[AppConstants.COMPUTER_OPENED] = true;
      this.gameService.useItem(AppConstants.REMOTE);
      this.gameService.useItem(AppConstants.GRIMOIRE);
      this.router.navigate(['inside-computer-secured']);
    } else {
      this.wrongAnswer = true;
    }
  }
}
