import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../../Services/client.service';


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {

  regForm : FormGroup = new FormGroup({
    firmName: new FormControl('', [Validators.required]),
    firmType: new FormControl('', [Validators.required]),
    firmEmail: new FormControl('', [Validators.required]),
    firmAddress: new FormControl('', [Validators.required]),
    firmPhone: new FormControl('', [Validators.required]),
    firmPassword: new FormControl('', [Validators.required])

  })

  constructor(private clientService: ClientService, private router: Router){}

  public addReg(){
    this.clientService.addClient(this.regForm.value).subscribe( data =>{
      alert('Successfullyy...!!!')
      this.router.navigate(['Client'])
    },
      (Error)=>{
        alert('Failed..!!!')
      } );
  }


}
