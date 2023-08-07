import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Users/admin/Components/login/login.component';
import { NavComponent } from './component/nav/nav.component';
import { DashComponent } from './component/dash/dash.component';
import { RegComponent } from './Users/client/Components/reg/reg.component';
import { ServeComponent } from './component/serve/serve.component';
import { NavDashComponent } from './component/nav-dash/nav-dash.component';
import { AboutComponent } from './component/about/about.component';
import { ReviewComponent } from './component/review/review.component';
import { FormContactComponent } from './component/form-contact/form-contact.component';
import { AuditFormComponent } from './Users/client/Components/audit-form/audit-form.component';
import { AuditTableComponent } from './Users/admin/Components/audit-table/audit-table.component';
import { ConsaltantTableComponent } from './Users/admin/Components/consaltant-table/consaltant-table.component';
import { ReportComponent } from './component/report/report.component';
import { ProjectComponent } from './component/project/project.component';
import { HomeComponent } from './Users/admin/Components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { NavtestComponent } from './component/navtest/navtest.component';
import { ConsaltantFormComponent } from './Users/client/Components/consaltant-form/consaltant-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './Users/admin/Components/profile/profile.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavigationComponent } from './Users/admin/Components/navigation/navigation.component';
import { MatMenuModule } from '@angular/material/menu';
import { ProfileUserComponent } from './Users/client/Components/profile-user/profile-user.component';
import { NavUserComponent } from './Users/client/Components/nav-user/nav-user.component';
import { ClientLoginComponent } from './Users/client/Components/client-login/client-login.component';
import { CommonModule } from '@angular/common';
import { RequestsComponent } from './Users/client/Components/requests/requests.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashComponent,
    RegComponent,
    ServeComponent,
    NavDashComponent,
    AboutComponent,
    ReviewComponent,
    FormContactComponent,
    AuditFormComponent,
    ReportComponent,
    ProjectComponent,
    NavtestComponent,
    ConsaltantFormComponent,
    ProfileUserComponent,
    NavUserComponent,
    ClientLoginComponent,
    RequestsComponent,
   
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule, 
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
