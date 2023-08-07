import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { consaltant } from '../../Services/Consultancy/consultancy';
import { ConsultancyService } from '../../Services/Consultancy/consultancy.service';



@Component({
  selector: 'app-update-consaltant',
  templateUrl: './update-consaltant.component.html',
  styleUrls: ['./update-consaltant.component.css']
})
export class UpdateConsaltantComponent {

  id!:number;
  consaltant: consaltant = new consaltant();

  constructor(private consaltantService: ConsultancyService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void{
    this.id = this.route.snapshot.params['consultancyId'];
    
    this.consaltantService.getConsultantById(this.id).subscribe(data=>{
      this.consaltant=data;
      console.log(data)
    });
  }

  updateConsultant(){
    this.consaltantService.updateConsultant(this.id,this.consaltant).subscribe(data=>{
      alert("updated...!!!")
      this.router.navigate(['Client/nav/consultancy-list'])
    },
    (Error)=>{
      alert("failled...!!!")
    })
  }

}
