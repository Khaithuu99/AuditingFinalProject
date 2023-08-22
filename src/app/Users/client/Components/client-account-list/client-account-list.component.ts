import { Component } from '@angular/core';
import { AccountingService } from '../../Services/Accounting/accounting.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-account-list',
  templateUrl: './client-account-list.component.html',
  styleUrls: ['./client-account-list.component.css']
})
export class ClientAccountListComponent {

  constructor(private accountService:AccountingService, private router: Router){}

  ngOnInit(){
    this.getAccountings();
  }

  accountList!: any[];
  getAccountings(){
    this.accountService.getAllAccounts(localStorage.getItem("clientId")).subscribe(data=>{
      this.accountList = data;
      console.log(data);
    })
  }

  view(id:any){
    this.router.navigate(['Client/nav/account-contract-view', {id}])
  }



  updateAccounting(accountId: number){
    this.router.navigate(['Client/nav/update-account',{accountId}])
    console.log(accountId)
  }
  
 
}
