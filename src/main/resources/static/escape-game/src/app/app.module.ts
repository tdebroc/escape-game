import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

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
    Lockergold1Component
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot([
      { path: '', component: LandingpageComponent },
      { path: 'livingroom1', component: Livingroom1Component },
      { path: 'livingroom2', component: Livingroom2Component },
      { path: 'livingroom3', component: Livingroom3Component },
      { path: 'livingroom4', component: Livingroom4Component },
      { path: 'emptydrawer', component: EmptydrawerComponent },
      { path: 'livingroom3drawer1', component: Livingroom3drawer1Component },
      { path: 'livingroom1drawerPurple', component: Livingroom1drawerPurpleComponent },
      { path: 'livingroom-window/:windowId', component: LivingroomWindowComponent },
      { path: 'home', component: HomeComponent },
      { path: 'phone-invaders', component: PhoneInvadersComponent },
      { path: 'lockergold1', component: Lockergold1Component },
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
