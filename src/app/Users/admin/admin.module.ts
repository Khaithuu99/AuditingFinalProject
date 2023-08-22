import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './Components/login/login.component';
import { AuditTableComponent } from './Components/audit-table/audit-table.component';
import { ConsaltantTableComponent } from './Components/consaltant-table/consaltant-table.component';
import { HomeComponent } from './Components/home/home.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { AccountTableComponent } from './Components/account-table/account-table.component';
import { ViewAuditComponent } from './Components/view-audit/view-audit.component';
import { ViewAccountComponent } from './Components/view-account/view-account.component';
import { ViewConsultancyComponent } from './Components/view-consultancy/view-consultancy.component';
import { AdminContractsListComponent } from './Components/admin-contracts-list/admin-contracts-list.component';
import { AdminAuditContractFormComponent } from './Components/admin-audit-contract-form/admin-audit-contract-form.component';
import { AdminAccountContractFormComponent } from './Components/admin-account-contract-form/admin-account-contract-form.component';
import { AdminContractFormComponent } from './Components/admin-contract-form/admin-contract-form.component';
import { AdminAuditContractViewComponent } from './Components/admin-audit-contract-view/admin-audit-contract-view.component';
import { AdminAccountContractViewComponent } from './Components/admin-account-contract-view/admin-account-contract-view.component';
import { AdminAccountContractListComponent } from './Components/admin-account-contract-list/admin-account-contract-list.component';
import { AdminAuditContractListComponent } from './Components/admin-audit-contract-list/admin-audit-contract-list.component';
import { AdminConsultancyContractViewComponent } from './Components/admin-consultancy-contract-view/admin-consultancy-contract-view.component';
import { NgxPrintModule } from 'ngx-print';
import { NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    AuditTableComponent,
    ConsaltantTableComponent,
    HomeComponent,
    ProfileComponent,
    NavigationComponent,
    AccountTableComponent,
    ViewAuditComponent,
    ViewAccountComponent,
    ViewConsultancyComponent,
    AdminContractsListComponent,
    AdminContractFormComponent,
    AdminAuditContractFormComponent,
    AdminAccountContractFormComponent,
    AdminAuditContractViewComponent,
    AdminAccountContractViewComponent,
    AdminAccountContractListComponent,
    AdminAuditContractListComponent,
    AdminConsultancyContractViewComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    NgxPrintModule,
    NgbModalModule,
    NgbDatepickerModule
  
  ]
})
export class AdminModule { }
