import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from '@angular/material/tooltip';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Livingroom1Component } from './livingroom1/livingroom1.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Livingroom2Component } from './livingroom2/livingroom2.component';
import { Livingroom3Component } from './livingroom3/livingroom3.component';
import { Livingroom4Component } from './livingroom4/livingroom4.component';
import { EmptydrawerComponent } from './emptydrawer/emptydrawer.component';
import { Livingroom3drawer1Component } from './livingroom3drawer1/livingroom3drawer1.component';
import { ItemsComponent } from './items/items.component';
import { Livingroom1drawerPurpleComponent } from './livingroom1drawer-purple/livingroom1drawer-purple.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LivingroomWindowComponent } from './livingroom-window/livingroom-window.component';
import { PhoneInvadersComponent } from './phone-invaders/phone-invaders.component';
import { Lockergold1Component } from './lockergold1/lockergold1.component';
import { InsidechestgoldComponent } from './insidechestgold/insidechestgold.component';
import { TrophyComponent } from './trophies/trophy.component';
import { InsidecupboardleftinnerComponent } from './insidecupboardleftinner/insidecupboardleftinner.component';
import { WatchingtvComponent } from './watchingtv/watchingtv.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { ClockDigitalComponent } from './clock-digital/clock-digital.component';
import { ReadGrimoireComponent } from './read-grimoire/read-grimoire.component';
import { InsideComputerSecuredComponent } from './inside-computer-secured/inside-computer-secured.component';
import { InsideComputerLoginComponent } from './inside-computer-login/inside-computer-login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UnderSofaRightComponent } from './under-sofa-right/under-sofa-right.component';
import { InsideWoodCupboardLeftComponent } from './inside-wood-cupboard-left/inside-wood-cupboard-left.component';
import { JukeboxComponent } from './jukebox/jukebox.component';
import { DoorOpenedGameWonComponent } from './door-opened-game-won/door-opened-game-won.component';
import { InsideCupboardJapanComponent } from './inside-cupboard-japan/inside-cupboard-japan.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Livingroom1Component,
    Livingroom2Component,
    Livingroom3Component,
    Livingroom4Component,
    EmptydrawerComponent,
    Livingroom3drawer1Component,
    ItemsComponent,
    Livingroom1drawerPurpleComponent,
    LandingpageComponent,
    LivingroomWindowComponent,
    PhoneInvadersComponent,
    Lockergold1Component,
    InsidechestgoldComponent,
    TrophyComponent,
    InsidecupboardleftinnerComponent,
    WatchingtvComponent,
    CoffeeComponent,
    ClockDigitalComponent,
    ReadGrimoireComponent,
    InsideComputerSecuredComponent,
    InsideComputerLoginComponent,
    UnderSofaRightComponent,
    InsideWoodCupboardLeftComponent,
    JukeboxComponent,
    DoorOpenedGameWonComponent,
    InsideCupboardJapanComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    RouterModule.forRoot([
      {path: '', component: LandingpageComponent},
      {path: 'livingroom1', component: Livingroom1Component},
      {path: 'livingroom2', component: Livingroom2Component},
      {path: 'livingroom3', component: Livingroom3Component},
      {path: 'livingroom4', component: Livingroom4Component},
      {path: 'emptydrawer', component: EmptydrawerComponent},
      {path: 'livingroom3drawer1', component: Livingroom3drawer1Component},
      {path: 'livingroom1drawerPurple', component: Livingroom1drawerPurpleComponent},
      {path: 'livingroom-window/:windowId', component: LivingroomWindowComponent},
      {path: 'home', component: HomeComponent},
      {path: 'phone-invaders', component: PhoneInvadersComponent},
      {path: 'lockergold1', component: Lockergold1Component},
      {path: 'inside-chest-gold', component: InsidechestgoldComponent},
      {path: 'inside-cupboard-left-inner', component: InsidecupboardleftinnerComponent},
      {path: 'watching-tv', component: WatchingtvComponent},
      {path: 'coffee', component: CoffeeComponent},
      {path: 'clock-digital', component: ClockDigitalComponent},
      {path: 'read-grimoire', component: ReadGrimoireComponent},
      {path: 'inside-computer-login', component: InsideComputerLoginComponent},
      {path: 'inside-computer-secured', component: InsideComputerSecuredComponent},
      {path: 'under-sofa-right', component: UnderSofaRightComponent},
      {path: 'inside-wood-cupboard-left', component: InsideWoodCupboardLeftComponent},
      {path: 'jukebox', component: JukeboxComponent},
      {path: 'doorOpenedGameWon', component: DoorOpenedGameWonComponent},
      {path: 'japan-expo', component: InsideCupboardJapanComponent},
      {path: '**', component: LandingpageComponent}
    ], { useHash: true }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
