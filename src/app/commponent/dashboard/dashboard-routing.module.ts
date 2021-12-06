import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { InitialComponent } from "./initial/initial.component";
import { ReportsComponent } from "./reports/reports.component";
import { CreateUserComponent } from "./userform/create-user/create-user.component";
import { UserformComponent } from "./userform/userform.component";
const routes:Routes=[
    {path:'',component:DashboardComponent,children:[
        {path:'',component:InitialComponent},
        {path:"user-form",component:UserformComponent},
        {path:'create-user',component:CreateUserComponent},
        {path:'reports',component:ReportsComponent},
        {path:':id/create-user',component:CreateUserComponent}

    ]}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }
  