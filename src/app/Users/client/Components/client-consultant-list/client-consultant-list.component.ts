import { Component } from '@angular/core';
import { ConsultancyService } from '../../Services/Consultancy/consultancy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-consultant-list',
  templateUrl: './client-consultant-list.component.html',
  styleUrls: ['./client-consultant-list.component.css']
})
export class ClientConsultantListComponent {

  constructor(private consultancyService:ConsultancyService, private router:Router){}

  ngOnInit(){
    this.getConsultancy();
  }

  consultancyList!: any[];
  getConsultancy(){
    this.consultancyService.getAllConsultancy(localStorage.getItem("clientId")).subscribe(data=>{
      this.consultancyList = data;
      console.log(data);
    })
  }

  view(id:any){
    this.router.navigate(['Client/nav/consultancy-contract-view', {id}])
  }

  
  updateConsultant(consultancyId: number){
    this.router.navigate(['Client/nav/update-consaltant/',{consultancyId}])
  }

}
