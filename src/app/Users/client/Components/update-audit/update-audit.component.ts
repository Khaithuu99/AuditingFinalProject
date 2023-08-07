import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { audit } from '../../Services/Audit/audit';
import { AuditService } from '../../Services/Audit/audit.service';


@Component({
  selector: 'app-update-audit',
  templateUrl: './update-audit.component.html',
  styleUrls: ['./update-audit.component.css']
})
export class UpdateAuditComponent {

  id!:number;
  audit: audit = new audit();

  constructor(private auditService: AuditService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void{
    this.id = this.route.snapshot.params['auditId'];
    
    this.auditService.getAuditById(this.id).subscribe(data=>{
      this.audit=data;
      console.log(data)
    });
  }

  updateAudit(){
    this.auditService.updateAudit(this.id,this.audit).subscribe(data=>{
      alert("updated...!!!")
      this.router.navigate(['Client/nav/audit-list'])
    },
    (Error)=>{
      alert("failled...!!!")
    })
  }
}
