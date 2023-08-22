import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { client } from 'src/app/Users/client/Services/client';
import { ConsaltantService } from '../../Services/Consultancy/consaltant.service';
import { ClientService } from 'src/app/Users/client/Services/client.service';

@Component({
  selector: 'app-view-consultancy',
  templateUrl: './view-consultancy.component.html',
  styleUrls: ['./view-consultancy.component.css']
})
export class ViewConsultancyComponent {
  client: client = new client();

  constructor(private clientService: ClientService,
    private consultancyService:ConsaltantService, private router:Router,
    private route: ActivatedRoute){}

  ngOnInit(): void{
    this.viewConsultancy();
  }

  
  consultancy!: any
  viewConsultancy(){
const id = this.route.snapshot.params['consultancyId'];
    this.consultancyService.getConsultantById(id).subscribe(data=>{
      this.consultancy  = data;
      console.log(data);
    })

  }
}
