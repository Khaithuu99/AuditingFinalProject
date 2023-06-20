import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsaltantService } from 'src/app/services/consaltant.service';

@Component({
  selector: 'app-consaltant-form',
  templateUrl: './consaltant-form.component.html',
  styleUrls: ['./consaltant-form.component.css']
})
export class ConsaltantFormComponent {


  consultantForm: FormGroup = new FormGroup({
    firmName: new FormControl('', [Validators.required]),
    firmType: new FormControl('', [Validators.required]),
    place: new FormControl('', [Validators.required]),
    financialYear: new FormControl('', [Validators.required]),
    consultant: new FormControl('', [Validators.required])
  })

  
constructor(private consaltantService: ConsaltantService, private router: Router){}

  public addConsultant(){
    this.consaltantService.addConsultant(this.consultantForm.value).subscribe( data =>{
      alert('Successfullyy...!!!')
      this.router.navigate(['/nav/consaltant-table'])
    },
      (Error)=>{
        alert('Failed..!!!')
      } );
  }

}
