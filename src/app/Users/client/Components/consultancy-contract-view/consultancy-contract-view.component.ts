import { Component } from '@angular/core';
import { ConsultancyService } from '../../Services/Consultancy/consultancy.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consultancy-contract-view',
  templateUrl: './consultancy-contract-view.component.html',
  styleUrls: ['./consultancy-contract-view.component.css']
})
export class ConsultancyContractViewComponent {

  constructor(private consultancyService:ConsultancyService, private route: ActivatedRoute){}

  ngOnInit(){
    this.viewContract();
  }
  
  consultancyContract!: any;
  viewContract(){
    const id = this.route.snapshot.params['id'];
  
    this.consultancyService.viewContract(id).subscribe(data=>{
      this.consultancyContract = data;
      console.log(data);
    })
  }
}
