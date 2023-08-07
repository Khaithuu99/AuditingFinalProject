import { Component } from '@angular/core';
import { AuditService } from '../../Services/Audit/audit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-audit-list',
  templateUrl: './client-audit-list.component.html',
  styleUrls: ['./client-audit-list.component.css']
})
export class ClientAuditListComponent {

  constructor(private auditService:AuditService, private router:Router){}

  ngOnInit(){
    this.getAudits();
  }

  auditList!: any[];
  getAudits(){
    this.auditService.getAllAudits(localStorage.getItem("clientId")).subscribe(data=>{
      this.auditList = data;
      console.log(data);
    })
  }

  view(id:any){
    this.router.navigate(['Client/nav/audit-contract-view', {id}])
  }

  

  updateAudit(auditId: number){
    this.router.navigate(['Client/nav/updateaudit',{auditId}])
  }


}
