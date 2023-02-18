import {Component} from '@angular/core';
import {GameService} from './service/game.service';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'escape-game';

  constructor(private gameService: GameService,
              public router: Router) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        function replaceAll(str, find, replace) {
          return str.replace(new RegExp(find, 'g'), replace);
        }
        let page_title = replaceAll(event.urlAfterRedirects, "-", "")
        page_title = replaceAll(page_title, "/", "")
        console.log("Sending ", page_title)
        // @ts-ignore
        gtag('event', 'page_view', {
          page_title: page_title,
          page_location: page_title,
          page_path: page_title,
          send_to: 'G-1RR79R36XT'
        });
      }
    })
  }

}
