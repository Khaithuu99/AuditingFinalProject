import { Component } from '@angular/core';
import { ConsaltantService } from '../../Services/Consultancy/consaltant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-consultancy-contract-view',
  templateUrl: './admin-consultancy-contract-view.component.html',
  styleUrls: ['./admin-consultancy-contract-view.component.css']
})
export class AdminConsultancyContractViewComponent {
  constructor(private consultancyService:ConsaltantService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.viewContract();
  }
  
  contract!: any;
  viewContract(){
    const id = this.route.snapshot.params['id'];
  
    this.consultancyService.viewContract(id).subscribe(data=>{
      this.contract = data;
      console.log(data);
    })
  }
}
