import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './Components/login/login.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { HomeComponent } from './Components/home/home.component';
import { AuditTableComponent } from './Components/audit-table/audit-table.component';
import { ConsaltantTableComponent } from './Components/consaltant-table/consaltant-table.component';
import { AuditFormComponent } from '../client/Components/audit-form/audit-form.component';
import { ConsaltantFormComponent } from '../client/Components/consaltant-form/consaltant-form.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { AccountTableComponent } from './Components/account-table/account-table.component';
import { ViewAccountComponent } from './Components/view-account/view-account.component';
import { ViewAuditComponent } from './Components/view-audit/view-audit.component';
import { ViewConsultancyComponent } from './Components/view-consultancy/view-consultancy.component';
import { AdminContractFormComponent } from './Components/admin-contract-form/admin-contract-form.component';
import { AdminAccountContractFormComponent } from './Components/admin-account-contract-form/admin-account-contract-form.component';
import { AdminAuditContractFormComponent } from './Components/admin-audit-contract-form/admin-audit-contract-form.component';
import { AdminContractsListComponent } from './Components/admin-contracts-list/admin-contracts-list.component';
import { AdminAccountContractListComponent } from './Components/admin-account-contract-list/admin-account-contract-list.component';
import { AdminAuditContractListComponent } from './Components/admin-audit-contract-list/admin-audit-contract-list.component';
import { AdminConsultancyContractViewComponent } from './Components/admin-consultancy-contract-view/admin-consultancy-contract-view.component';
import { AdminAccountContractViewComponent } from './Components/admin-account-contract-view/admin-account-contract-view.component';
import { AdminAuditContractViewComponent } from './Components/admin-audit-contract-view/admin-audit-contract-view.component';
import { AdminAuthGuard } from './PathAuth/admin-auth.guard';



const routes: Routes = [
  { path: "", component:LoginComponent },
  {path:"navigation",component:NavigationComponent, canActivate:[AdminAuthGuard], children:[
  {path:"",component:HomeComponent},
  {path:"audit-table",component:AuditTableComponent},
  {path:"consaltant-table",component:ConsaltantTableComponent},
  {path:"account-table",component:AccountTableComponent},
  {path:"audit",component:AuditFormComponent},
  {path:"consultant",component:ConsaltantFormComponent},
  {path:"profile",component:ProfileComponent},
  {path:"view-account",component:ViewAccountComponent},
  {path:"view-audit",component:ViewAuditComponent},
  {path:"view-consultancy",component:ViewConsultancyComponent},
  {path:"consultancy-contract", component:AdminContractFormComponent},
  {path:"account-contract", component: AdminAccountContractFormComponent},
  {path: "audit-contract", component:AdminAuditContractFormComponent},
  {path:"consultancy-contracts-list", component:AdminContractsListComponent},
  {path:"account-contracts-list",component:AdminAccountContractListComponent},
  {path:"audit-contracts-list",component:AdminAuditContractListComponent},
  {path:"consultancy-contracts-view",component:AdminConsultancyContractViewComponent},
  {path:"account-contracts-view",component:AdminAccountContractViewComponent},
  {path:"audit-contracts-view",component:AdminAuditContractViewComponent}

  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
