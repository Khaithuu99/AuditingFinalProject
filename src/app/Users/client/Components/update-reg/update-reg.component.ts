import { Component } from '@angular/core';
import { client } from '../../Services/client';
import { ClientService } from '../../Services/client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-reg',
  templateUrl: './update-reg.component.html',
  styleUrls: ['./update-reg.component.css']
})
export class UpdateRegComponent {
  id!:number;
  client: client  = new client();

  constructor(private clientService: ClientService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void{
    
    this.id = this.route.snapshot.params['clientId'];
    
    this.clientService.getClientById(this.id).subscribe(data=>{
      this.client=data;
      console.log(data)
    });
  }

  updateClient(){
    this.clientService.updateClient(this.id,this.client).subscribe(data=>{
      alert("updated...!!!")
      this.router.navigate(['Client'])
    },
    (Error)=>{
      alert("failled...!!!")
    })
  }
}
