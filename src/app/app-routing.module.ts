import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  MaindashboardRoutingModule } from './pages/maindashboard.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { PagesnofoundComponent } from './pagesnofound/pagesnofound.component';




const routes: Routes = [

  // path : '/dashboard' PagesRouting
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: PagesnofoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    MaindashboardRoutingModule,
    AuthRoutingModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
