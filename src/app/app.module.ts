import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { PagesnofoundComponent } from './pages/pagesnofound/pagesnofound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { CategoryComponent } from './pages/category/category.component';
import { UsersComponent } from './pages/users/users.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { MaindashboardComponent } from './pages/maindashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesnofoundComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    ClientsComponent,
    CategoryComponent,
    UsersComponent,
    ScheduleComponent,
    BreadcrumbsComponent,
    MaindashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
