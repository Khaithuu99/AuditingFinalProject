import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../../Services/client.service';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent {

  client: any
  clientId!: number

  clientLogin: FormGroup = new FormGroup({
    clientId: new FormControl(0),
    firmPassword: new FormControl("",[Validators.required, Validators.minLength(8)]),
    firmEmail: new FormControl("",[Validators.required, Validators.email])
  });

  constructor(private router: Router, private clientService:ClientService){}
  ngOnInit(): void{}

  LoggingIn(){
    this.clientService.getClientLogin(this.clientLogin.value).subscribe(response => {
      console.log(response);
      this.client= response
      localStorage.setItem("clientId",JSON.stringify(this.client.clientId));
      this.router.navigate(['Client/nav']);
      alert('Login successfullyy...!!!')
    },
      error =>{
        alert('Login Failledd...')
      }
    )
  };

}
