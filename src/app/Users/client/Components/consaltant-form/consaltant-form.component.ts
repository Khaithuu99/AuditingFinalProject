import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsaltantService } from 'src/app/Users/admin/Services/consaltant.service';

@Component({
  selector: 'app-consaltant-form',
  templateUrl: './consaltant-form.component.html',
  styleUrls: ['./consaltant-form.component.css']
})
export class ConsaltantFormComponent {


  consultantForm: FormGroup = new FormGroup({
    clientId: new FormControl(localStorage.getItem('clientId')),
    financialYear: new FormControl('', [Validators.required]),
    consultancyType: new FormControl('', [Validators.required]),
    consultancyScope: new FormControl('', [Validators.required]),
    consultancyObjective: new FormControl('', [Validators.required]),
    expert: new FormControl('', [Validators.required]),
    budget: new FormControl('', [Validators.required]),
    feeStructure: new FormControl('', [Validators.required])

  })

  
constructor(private consaltantService: ConsaltantService, private router: Router){}

  public addConsultant(){
    this.consaltantService.addConsultant(this.consultantForm.value).subscribe( data =>{
      alert('Successfullyy...!!!')
      this.router.navigate(['Client/nav/consultancy-list']);
      this.consultantForm.reset();
    },
      (Error)=>{
        alert('Failed..!!!')
      } );
  }

}
