import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MaindashboardComponent } from './maindashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ClientsComponent } from './clients/clients.component';
import { CategoryComponent } from './category/category.component';
import { ScheduleComponent } from './schedule/schedule.component';


const routes: Routes = [
    { path: 'dashboard', component: MaindashboardComponent,
children: [
  { path: '', component: DashboardComponent},
  {path: 'users', component: UsersComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'schedule', component: ScheduleComponent}

 ]
},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MaindashboardRoutingModule {}
