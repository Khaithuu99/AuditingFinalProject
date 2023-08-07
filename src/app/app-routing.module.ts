import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './component/dash/dash.component';
import { ServeComponent } from './component/serve/serve.component';
import { NavDashComponent } from './component/nav-dash/nav-dash.component';
import { AboutComponent } from './component/about/about.component';
import { ReviewComponent } from './component/review/review.component';
import { FormContactComponent } from './component/form-contact/form-contact.component';

import { ProfileUserComponent } from './Users/client/Components/profile-user/profile-user.component';

const routes: Routes = [
//  {path:"",component:LoginComponent},

 {path:"",component:NavDashComponent, children:[
  {path:"",component:DashComponent},
  {path:"serve",component:ServeComponent},
  {path:"about",component:AboutComponent},
  {path:"review",component:ReviewComponent},
  {path:"contact",component:FormContactComponent}, 
  {path:"user",component:ProfileUserComponent},

]},
  
 { path: 'Admin', loadChildren: () => import('./Users/admin/admin.module').then(m => m.AdminModule) },
 { path: 'Client', loadChildren: () => import('./Users/client/client.module').then(m => m.ClientModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
