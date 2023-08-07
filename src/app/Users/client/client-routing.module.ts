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


const routes: Routes = [
  {path: '', component: RegComponent },
  {path: 'login', component:ClientLoginComponent},
  {path: 'nav', component:NavUserComponent , children:[
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
  {path:"updateaudit",component:UpdateAuditComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
