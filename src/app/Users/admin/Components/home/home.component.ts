import { Component } from '@angular/core';
import { AuditService } from '../../Services/Audit/audit.service';
import { AccountingService } from '../../Services/Accounting/accounting.service';
import { ConsaltantService } from '../../Services/Consultancy/consaltant.service';
import { ClientService } from 'src/app/Users/client/Services/client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private auditService:AuditService, private accountService: AccountingService,
     private consultancyService: ConsaltantService, private clientService: ClientService){

  }

  ngOnInit(){
    this.countAudits();
    this.countAccounts();
    this.countConsultancy();
    this.countClients();
  }

  audits!: any;
  countAudits(){
    this.auditService.countAudit().subscribe(respo=>{
      this.audits = respo;
      console.log(this.audits)
    })
  }

  accounts!: any;
  countAccounts(){
    this.accountService.countAccount().subscribe(respo=>{
      this.accounts = respo;
      console.log(this.accounts)
    })
  }

  consultancy!: any;
  countConsultancy(){
    this.consultancyService.countConsultancy().subscribe(respo=>{
      this.consultancy = respo;
      console.log(this.consultancy)
    })
  }

  clients!: any;
  countClients(){
    this.clientService.countClient().subscribe(respo=>{
      this.clients = respo;
      console.log(this.clients)
    })
  }

}
