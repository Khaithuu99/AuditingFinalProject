import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {

  regForm : FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])

  })

  constructor(private registrationService: RegistrationService, private router: Router){}

  public addReg(){
    this.registrationService.addRegistration(this.regForm.value).subscribe( data =>{
      alert('Successfullyy...!!!')
      this.router.navigate([''])
    },
      (Error)=>{
        alert('Failed..!!!')
      } );
  }


}
