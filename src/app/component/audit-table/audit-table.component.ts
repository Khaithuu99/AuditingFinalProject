import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { audit } from 'rxjs';
import { AuditService } from 'src/app/services/audit.service';

@Component({
  selector: 'app-audit-table',
  templateUrl: './audit-table.component.html',
  styleUrls: ['./audit-table.component.css']
})
export class AuditTableComponent{
  audit!:any[]
 
  constructor(private elementRef: ElementRef, private auditService: AuditService, private router: Router){}

  ngOnInit(): void{
    this.getAudit();
  }
 

  public getAudit(){
    this.auditService.getAudit().subscribe( data =>{
      this.audit = data
      console.log(data)
     
    })
  }

  public deleteAudit(id:number){
    this.auditService.deleteAudit(id).subscribe(
      (data)=>{
        alert('Deleted...!!!')
        this.getAudit();
      },
      (Error)=>{
        alert('failled...!!!')
      }
    )
  }


  updateAudit(id: number){
    this.router.navigate(['nav/updateaudit',{id}])
  }
}
