import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {MaindashboardModule} from './pages/maindashboard.module';
import { AuthModule} from './auth/auth.module';


import { AppComponent } from './app.component';

import { PagesnofoundComponent } from './pagesnofound/pagesnofound.component';




@NgModule({
  declarations: [
    AppComponent,
    PagesnofoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaindashboardModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
