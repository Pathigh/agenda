import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MaindashboardComponent } from './maindashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ClientsComponent } from './clients/clients.component';
import { CategoryComponent } from './category/category.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ViewclientsComponent } from './clients/viewclients.component';
import { ViewusersComponent } from './users/viewusers.component';
import { ViewcategoryComponent } from './category/viewcategory.component';
import { ViewscheduleComponent } from './schedule/viewschedule.component';


const routes: Routes = [
    { path: 'dashboard', component: MaindashboardComponent,
children: [
  { path: '', component: DashboardComponent},
  {path: 'users', component: UsersComponent},
  {path: 'viewusers', component: ViewusersComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'viewclients', component: ViewclientsComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'viewcategory', component: ViewcategoryComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'viewschedule', component: ViewscheduleComponent},

 ]
},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MaindashboardRoutingModule {}
