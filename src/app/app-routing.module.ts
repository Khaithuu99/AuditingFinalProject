import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './component/dash/dash.component';
import { LoginComponent } from './component/login/login.component';
import { NavComponent } from './component/nav/nav.component';
import { RegComponent } from './component/reg/reg.component';
import { ServeComponent } from './component/serve/serve.component';
import { NavDashComponent } from './component/nav-dash/nav-dash.component';
import { AboutComponent } from './component/about/about.component';
import { ReviewComponent } from './component/review/review.component';
import { FormContactComponent } from './component/form-contact/form-contact.component';
import { AuditFormComponent } from './component/audit-form/audit-form.component';
import { AuditTableComponent } from './component/audit-table/audit-table.component';
import { ConsaltantTableComponent } from './component/consaltant-table/consaltant-table.component';
import { ReportComponent } from './component/report/report.component';
import { ProjectComponent } from './component/project/project.component';
import { HomeComponent } from './component/home/home.component';
import { NavtestComponent } from './component/navtest/navtest.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ConsaltantFormComponent } from './component/consaltant-form/consaltant-form.component';
import { UpdateAuditComponent } from './component/update-audit/update-audit.component';
import { UpdateConsaltantComponent } from './component/update-consaltant/update-consaltant.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { ProfileUserComponent } from './component/profile-user/profile-user.component';
import { NavUserComponent } from './component/nav-user/nav-user.component';
import { ClientLoginComponent } from './component/client-login/client-login.component';

const routes: Routes = [
 {path:"",component:LoginComponent},

 {path:"navigation",component:NavigationComponent, children:[
  {path:"home",component:HomeComponent},
  {path:"audit-table",component:AuditTableComponent},
  {path:"consaltant-table",component:ConsaltantTableComponent},
  {path:"report",component:ReportComponent},
  {path:"update-consaltant",component:UpdateConsaltantComponent},
  {path:"updateaudit",component:UpdateAuditComponent},
  {path:"audit",component:AuditFormComponent},
  {path:"consultant",component:ConsaltantFormComponent},
  {path:"profile",component:ProfileComponent},


  
 ]},
 {path:"nav",component:NavDashComponent, children:[
 

  {path:"",component:DashComponent},
  {path:"serve",component:ServeComponent},
  {path:"about",component:AboutComponent},
  {path:"review",component:ReviewComponent},
  {path:"contact",component:FormContactComponent},
  {path:"audit",component:AuditFormComponent},
  {path:"consultant",component:ConsaltantFormComponent},
  {path:"reg",component:RegComponent},
  {path:"client-login", component:ClientLoginComponent},
  {path:"user",component:ProfileUserComponent},

]},
  

{path:"nav-user", component:NavUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
