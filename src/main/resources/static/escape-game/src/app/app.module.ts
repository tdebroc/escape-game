import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

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
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: '', component: LandingpageComponent },
      { path: 'livingroom1', component: Livingroom1Component },
      { path: 'livingroom2', component: Livingroom2Component },
      { path: 'livingroom3', component: Livingroom3Component },
      { path: 'livingroom4', component: Livingroom4Component },
      { path: 'emptydrawer', component: EmptydrawerComponent },
      { path: 'livingroom3drawer1', component: Livingroom3drawer1Component },
      { path: 'livingroom1drawerPurple', component: Livingroom1drawerPurpleComponent },
      { path: 'home', component: HomeComponent },
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
