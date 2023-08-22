import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { RegComponent } from './Components/reg/reg.component';
import { ClientLoginComponent } from './Components/client-login/client-login.component';
import { NavUserComponent } from './Components/nav-user/nav-user.component';
import { ProfileUserComponent } from './Components/profile-user/profile-user.component';
import { AuditFormComponent } from './Components/audit-form/audit-form.component';
import { ConsaltantFormComponent } from './Components/consaltant-form/consaltant-form.component';
import { AccountingComponent } from './Components/accounting/accounting.component';
import { RequestsComponent } from './Components/requests/requests.component';
import { ClientAccountListComponent } from './Components/client-account-list/client-account-list.component';
import { ClientAuditListComponent } from './Components/client-audit-list/client-audit-list.component';
import { ClientConsultantListComponent } from './Components/client-consultant-list/client-consultant-list.component';
import { AuditContractViewComponent } from './Components/audit-contract-view/audit-contract-view.component';
import { AccountingContractViewComponent } from './Components/accounting-contract-view/accounting-contract-view.component';
import { ConsultancyContractViewComponent } from './Components/consultancy-contract-view/consultancy-contract-view.component';
import { UpdateAuditComponent } from './Components/update-audit/update-audit.component';
import { UpdateConsaltantComponent } from './Components/update-consaltant/update-consaltant.component';
import { UpdateAccountingComponent } from './Components/update-accounting/update-accounting.component';
import { ClientContractsListComponent } from './Components/client-contracts-list/client-contracts-list.component';
import { AccountingContractReadComponent } from './Components/accounting-contract-read/accounting-contract-read.component';
import { AuditContractReadComponent } from './Components/audit-contract-read/audit-contract-read.component';
import { ConsultancyContractReadComponent } from './Components/consultancy-contract-read/consultancy-contract-read.component';
import { AuditContractsListComponent } from './Components/audit-contracts-list/audit-contracts-list.component';
import { AccountingContractListComponent } from './Components/accounting-contract-list/accounting-contract-list.component';
import { ClientAuthGuard } from './PathAuth/client-auth.guard';
import { UpdateRegComponent } from './Components/update-reg/update-reg.component';


const routes: Routes = [
  {path: '', component:ClientLoginComponent},
  {path: 'reg', component: RegComponent },
  {path: 'nav', component:NavUserComponent, canActivate:[ClientAuthGuard] , children:[
    {path:'profile',component:ProfileUserComponent},
    {path:'request',component:RequestsComponent},
    {path:"audit",component:AuditFormComponent},
    {path:"consultant",component:ConsaltantFormComponent},
    {path:"account",component:AccountingComponent},
    {path:"account-list", component:ClientAccountListComponent},
    {path:"audit-list", component:ClientAuditListComponent},
    {path:"consultancy-list", component:ClientConsultantListComponent},
    {path:'audit-contract-view', component:AuditContractViewComponent},
    {path:'account-contract-view', component:AccountingContractViewComponent},
    {path:'consultancy-contract-view', component:ConsultancyContractViewComponent},   
  {path:"update-account",component:UpdateAccountingComponent},
  {path:"update-consaltant",component:UpdateConsaltantComponent},
  {path:"updateaudit",component:UpdateAuditComponent},
  {path:"consultancy-contracts-list", component:ClientContractsListComponent},
  {path:"audit-contracts-list",component:AuditContractsListComponent},
  {path:"account-contracts-list",component:AccountingContractListComponent},
  {path:"account-contract-read", component:AccountingContractReadComponent},
  {path:"audit-contract-read",component:AuditContractReadComponent},
  {path:"consultancy-contract-read",component:ConsultancyContractReadComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
