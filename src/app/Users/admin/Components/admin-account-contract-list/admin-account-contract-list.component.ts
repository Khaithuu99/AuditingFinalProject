import { Component } from '@angular/core';
import { AccountingService } from '../../Services/Accounting/accounting.service';
import { Router } from '@angular/router';
import { AdminContractsService } from '../../Services/AdminContracts/admin-contracts.service';

@Component({
  selector: 'app-admin-account-contract-list',
  templateUrl: './admin-account-contract-list.component.html',
  styleUrls: ['./admin-account-contract-list.component.css']
})
export class AdminAccountContractListComponent {
  constructor(private accountService:AccountingService, private router: Router, private contractService: AdminContractsService){}

  ngOnInit(){
    this.getAccountings();
  }

  contracts!: any[];
  getAccountings(){
    this.contractService.getAccountingContracts(localStorage.getItem("clientId")).subscribe(data=>{
      this.contracts = data;
      console.log(data);
    })
  }

  view(id:any){
    this.router.navigate(['Admin/navigation/account-contracts-view', {id}])
  }

}
