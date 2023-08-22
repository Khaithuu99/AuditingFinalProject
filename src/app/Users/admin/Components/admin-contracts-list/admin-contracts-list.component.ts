import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConsaltantService } from '../../Services/Consultancy/consaltant.service';
import { AdminContractsService } from '../../Services/AdminContracts/admin-contracts.service';

@Component({
  selector: 'app-admin-contracts-list',
  templateUrl: './admin-contracts-list.component.html',
  styleUrls: ['./admin-contracts-list.component.css']
})
export class AdminContractsListComponent {

  constructor(private consultancyService:ConsaltantService, private router:Router, private contractService: AdminContractsService){}

  ngOnInit(){
    this.getConsultancy();
  }

  contracts!: any[];
  getConsultancy(){
    this.contractService.getConsultancyContracts(localStorage.getItem("clientId")).subscribe(data=>{
      this.contracts = data;
      console.log(data);
    })
  }

  view(id:any){
    this.router.navigate(['Admin/navigation/consultancy-contracts-view', {id}])
  }


}
