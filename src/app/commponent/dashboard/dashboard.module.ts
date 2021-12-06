import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InitialComponent } from './initial/initial.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReportsComponent } from './reports/reports.component';
import { UserformComponent } from './userform/userform.component';
import { UsersService } from 'src/app/service/users.service';
import { CreateUserComponent } from './userform/create-user/create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    InitialComponent,
    NavbarComponent,
    ReportsComponent,
    UserformComponent,
    CreateUserComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers:[UsersService]
})
export class DashboardModule { }
