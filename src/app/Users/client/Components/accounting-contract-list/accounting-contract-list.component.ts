import { Component } from '@angular/core';
import { AccountingService } from '../../Services/Accounting/accounting.service';
import { Router } from '@angular/router';
import { ClientContractsService } from '../../Services/ClientContracts/client-contracts.service';

@Component({
  selector: 'app-accounting-contract-list',
  templateUrl: './accounting-contract-list.component.html',
  styleUrls: ['./accounting-contract-list.component.css']
})
export class AccountingContractListComponent {
  constructor(private accountService:AccountingService, private router: Router,
    private contractService:ClientContractsService){}

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
    this.router.navigate(['Client/nav/account-contract-view', {id}])
  }



}
