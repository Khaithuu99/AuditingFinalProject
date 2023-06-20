import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ConsaltantService } from 'src/app/services/consaltant.service';

@Component({
  selector: 'app-consaltant-table',
  templateUrl: './consaltant-table.component.html',
  styleUrls: ['./consaltant-table.component.css']
})
export class ConsaltantTableComponent {
  consaltant!:any[]
 
  constructor(private elementRef: ElementRef, private consaltantService: ConsaltantService, private router: Router){}

  ngOnInit(): void{
    this.getConsultant();
  }

  public getConsultant(){
    this.consaltantService.getConsultant().subscribe( data =>{
      this.consaltant = data
      console.log(data)
     
    })
  }

  updateConsultant(id: number){
    this.router.navigate(['nav/update-consaltant',{id}])
  }

  public deleteConsultant(id:number){
    this.consaltantService.deleteConsultant(id).subscribe(
      (data)=>{
        alert('Deleted...!!!')
        this.getConsultant();
      },
      (Error)=>{
        alert('failled...!!!')
      }
    )
  }


}
