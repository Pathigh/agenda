import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { PagesnofoundComponent } from './pages/pagesnofound/pagesnofound.component';
import { CategoryComponent } from './pages/category/category.component';
import { MaindashboardComponent } from './pages/maindashboard.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [

{ path: '', component: MaindashboardComponent,
children: [
  { path: 'dashboard', component: DashboardComponent},
  {path: 'users', component: UsersComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'schedule', component: ScheduleComponent}
 ]
},

{path: 'login', component: LoginComponent},

{path: '**', component: PagesnofoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
