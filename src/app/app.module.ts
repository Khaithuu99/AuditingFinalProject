import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { NavComponent } from './component/nav/nav.component';
import { DashComponent } from './component/dash/dash.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { NavtestComponent } from './component/navtest/navtest.component';
import { ConsaltantFormComponent } from './component/consaltant-form/consaltant-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './component/profile/profile.component';
import { UpdateAuditComponent } from './component/update-audit/update-audit.component';
import { UpdateConsaltantComponent } from './component/update-consaltant/update-consaltant.component';
import { YesComponent } from './yes/yes.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavigationComponent } from './component/navigation/navigation.component';
import { MatMenuModule } from '@angular/material/menu';
import { ProfileUserComponent } from './component/profile-user/profile-user.component';
import { NavUserComponent } from './component/nav-user/nav-user.component';
import { ClientLoginComponent } from './component/client-login/client-login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    DashComponent,
    RegComponent,
    ServeComponent,
    NavDashComponent,
    AboutComponent,
    ReviewComponent,
    FormContactComponent,
    AuditFormComponent,
    AuditTableComponent,
    ConsaltantTableComponent,
    ReportComponent,
    ProjectComponent,
    HomeComponent,
    NavtestComponent,
    ConsaltantFormComponent,
    ProfileComponent,
    UpdateAuditComponent,
    UpdateConsaltantComponent,
    YesComponent,
    NavigationComponent,
    ProfileUserComponent,
    NavUserComponent,
    ClientLoginComponent
  ],
  imports: [
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
