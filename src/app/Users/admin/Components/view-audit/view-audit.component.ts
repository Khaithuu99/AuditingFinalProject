import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { client } from 'src/app/Users/client/Services/client';
import { ClientService } from 'src/app/Users/client/Services/client.service';
import { AuditService } from '../../Services/Audit/audit.service';

@Component({
  selector: 'app-view-audit',
  templateUrl: './view-audit.component.html',
  styleUrls: ['./view-audit.component.css']
})
export class ViewAuditComponent {
  client: client = new client();

  constructor(private clientService: ClientService,private auditService:AuditService ,
    private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void{
   this.viewAudit();

  }

  audit!: any
  viewAudit(){
const id = this.route.snapshot.params['auditId'];
    this.auditService.getAuditById(id).subscribe(data=>{
      this.audit  = data;
      console.log(data);
    })

  }

  
}
