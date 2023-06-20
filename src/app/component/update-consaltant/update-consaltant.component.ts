import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { consaltant } from 'src/app/services/consaltant';
import { ConsaltantService } from 'src/app/services/consaltant.service';

@Component({
  selector: 'app-update-consaltant',
  templateUrl: './update-consaltant.component.html',
  styleUrls: ['./update-consaltant.component.css']
})
export class UpdateConsaltantComponent {

  id!:number;
  consaltant: consaltant = new consaltant();

  constructor(private consaltantService: ConsaltantService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];
    
    this.consaltantService.getConsultantById(this.id).subscribe(data=>{
      this.consaltant=data;
      console.log(data)
    });
  }

  updateConsultant(){
    this.consaltantService.updateConsultant(this.id,this.consaltant).subscribe(data=>{
      alert("updated...!!!")
      this.router.navigate(['nav/consaltant-table'])
    },
    (Error)=>{
      alert("failled...!!!")
    })
  }

}
