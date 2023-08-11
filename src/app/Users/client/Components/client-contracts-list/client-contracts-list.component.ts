import { Component } from '@angular/core';
import { ClientContractsService } from '../../Services/ClientContracts/client-contracts.service';

@Component({
  selector: 'app-client-contracts-list',
  templateUrl: './client-contracts-list.component.html',
  styleUrls: ['./client-contracts-list.component.css']
})
export class ClientContractsListComponent {
  constructor(private contractService:ClientContractsService){}

  ngOnInit(){
    this.getAllContracts();
  }

  contracts!: any[];
  getAllContracts(){
    this.contractService.getAllContracts(localStorage.getItem("clientId")).subscribe(data=>{
this.contracts = data;
console.log(data);
    })
  }

}
