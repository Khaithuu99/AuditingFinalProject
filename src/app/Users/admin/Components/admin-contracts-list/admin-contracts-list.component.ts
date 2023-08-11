import { Component } from '@angular/core';
import { AdminContractsService } from '../../Services/AdminContracts/admin-contracts.service';

@Component({
  selector: 'app-admin-contracts-list',
  templateUrl: './admin-contracts-list.component.html',
  styleUrls: ['./admin-contracts-list.component.css']
})
export class AdminContractsListComponent {

  constructor(private contractService:AdminContractsService){}

  ngOnInit(){
    this.getAllContracts();
  }

  contracts!: any[];
  getAllContracts(){
    this.contractService.getAllContracts().subscribe(data=>{
this.contracts = data;
console.log(data);
    })
  }

}
