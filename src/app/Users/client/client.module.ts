import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountingComponent } from './Components/accounting/accounting.component';
import { ClientAuditListComponent } from './Components/client-audit-list/client-audit-list.component';
import { ClientAccountListComponent } from './Components/client-account-list/client-account-list.component';
import { ClientConsultantListComponent } from './Components/client-consultant-list/client-consultant-list.component';
import { ClientContractsListComponent } from './Components/client-contracts-list/client-contracts-list.component';
import {MatButtonModule} from '@angular/material/button';
import { AuditContractViewComponent } from './Components/audit-contract-view/audit-contract-view.component';
import { AccountingContractViewComponent } from './Components/accounting-contract-view/accounting-contract-view.component';
import { ConsultancyContractViewComponent } from './Components/consultancy-contract-view/consultancy-contract-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateAccountingComponent } from './Components/update-accounting/update-accounting.component';
import { UpdateAuditComponent } from './Components/update-audit/update-audit.component';
import { UpdateConsaltantComponent } from './Components/update-consaltant/update-consaltant.component';

@NgModule({
  declarations: [
    ClientComponent,
    AccountingComponent,
    ClientAuditListComponent,
    ClientAccountListComponent,
    ClientConsultantListComponent,
    ClientContractsListComponent,
    AuditContractViewComponent,
    AccountingContractViewComponent,
    ConsultancyContractViewComponent,
    UpdateAccountingComponent,
    UpdateAuditComponent,
    UpdateConsaltantComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    
   
  ]
})
export class ClientModule { }
