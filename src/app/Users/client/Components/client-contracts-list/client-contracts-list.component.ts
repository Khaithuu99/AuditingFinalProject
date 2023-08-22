import { Component } from '@angular/core';
import { ClientContractsService } from '../../Services/ClientContracts/client-contracts.service';
import { Router } from '@angular/router';
import { ConsultancyService } from '../../Services/Consultancy/consultancy.service';

@Component({
  selector: 'app-client-contracts-list',
  templateUrl: './client-contracts-list.component.html',
  styleUrls: ['./client-contracts-list.component.css']
})
export class ClientContractsListComponent {
  constructor(private consultancyService:ConsultancyService, private router:Router,
    private contractService:ClientContractsService){}

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
    this.router.navigate(['Client/nav/consultancy-contract-read', {id}])
  }


}
