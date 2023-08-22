import { Component } from '@angular/core';
import { ClientContractsService } from '../../Services/ClientContracts/client-contracts.service';
import { Router } from '@angular/router';
import { AuditService } from '../../Services/Audit/audit.service';

@Component({
  selector: 'app-audit-contracts-list',
  templateUrl: './audit-contracts-list.component.html',
  styleUrls: ['./audit-contracts-list.component.css']
})
export class AuditContractsListComponent {
  constructor(private auditService:AuditService, private router:Router,
    private contractService:ClientContractsService){}

  ngOnInit(){
    this.getAudits();
  }

  contracts!: any[];
  getAudits(){
    this.contractService.getAuditContracts(localStorage.getItem("clientId")).subscribe(data=>{
      this.contracts = data;
      console.log(data);
    })
  }

  view(id:any){
    this.router.navigate(['Client/nav/audit-contract-read', {id}])
  }

}
