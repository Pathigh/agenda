import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients.component';
import { CategoryComponent} from './category/category.component';
import { UsersComponent} from './users/users.component';
import { ScheduleComponent} from './schedule/schedule.component';
import { MaindashboardComponent } from './maindashboard.component';

import { ViewscheduleComponent } from './schedule/viewschedule.component';
import { ViewusersComponent } from './users/viewusers.component';
import { ViewcategoryComponent } from './category/viewcategory.component';
import { ViewclientsComponent } from './clients/viewclients.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ClientsComponent,
    CategoryComponent,
    UsersComponent,
    ScheduleComponent,
    MaindashboardComponent,
    ViewscheduleComponent,
    ViewusersComponent,
    ViewcategoryComponent,
    ViewclientsComponent
  ],
  exports: [
    DashboardComponent,
    ClientsComponent,
    CategoryComponent,
    UsersComponent,
    ScheduleComponent,
    MaindashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class MaindashboardModule { }
