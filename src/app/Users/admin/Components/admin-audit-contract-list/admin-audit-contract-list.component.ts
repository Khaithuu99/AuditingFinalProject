import { Component } from '@angular/core';
import { AuditService } from '../../Services/Audit/audit.service';
import { Router } from '@angular/router';
import { AdminContractsService } from '../../Services/AdminContracts/admin-contracts.service';

@Component({
  selector: 'app-admin-audit-contract-list',
  templateUrl: './admin-audit-contract-list.component.html',
  styleUrls: ['./admin-audit-contract-list.component.css']
})
export class AdminAuditContractListComponent {
  constructor(private auditService: AuditService, private router:Router, private contractService: AdminContractsService){}

  ngOnInit(){
    this.getAudit();
  }

  contracts!: any[];
  getAudit(){
    this.contractService.getAuditContracts(localStorage.getItem("clientId")).subscribe(data=>{
      this.contracts = data;
      console.log(data);
    })
  }

  view(id:any){
    this.router.navigate(['Admin/navigation/audit-contracts-view', {id}])
  }


}
