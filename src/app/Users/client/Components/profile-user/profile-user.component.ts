import { Component } from '@angular/core';
import { client } from '../../Services/client';
import { ClientService } from '../../Services/client.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent {

  client: client = new client();

  constructor(private clientService: ClientService, private router: Router){}

  ngOnInit(): void{
    this.fetchClient();
  }

  public fetchClient(){
    this.clientService.getClientById(localStorage.getItem("clientId")).subscribe(response =>{
      this.client = response
      console.log(response)
     
    })
  }
  updateProfile(id: any){
    this.router.navigate(['Client/update-reg',{id}])
  }

}
