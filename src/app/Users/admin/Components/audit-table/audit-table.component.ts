import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { audit } from 'rxjs';
import { AuditService } from 'src/app/Users/admin/Services/audit.service';

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

 
  viewAudit(auditId: number){
    this.router.navigate(['Admin/navigation/view-audit',{auditId}])
  }
  

  
  openDeleteConfirmation(auditId: number): void {
    const confirmResult = window.confirm('Are you sure you want to delete this accounting?');

    if (confirmResult) {
      // User clicked OK to delete the accounting
      this.deleteAudit(auditId);
    } else {
      // User clicked Cancel or closed the dialog
      // You can handle this case if needed, or simply ignore it
    }
  }

  public deleteAudit(auditId:number){
    this.auditService.deleteAudit(auditId).subscribe(
      (data)=>{
        alert('Deleted...!!!')
        this.getAudit();
      },
      (Error)=>{
        alert('failled...!!!')
      }
    )
  }





  openApprovalConfirmation(id: number): void {
    const confirmResult = window.confirm('Do you want to approve the request?');

    if (confirmResult) {
      // User clicked OK to approve the request
      this.approveRequest(id);
    } else {
      // User clicked Cancel or closed the dialog
      // You can handle this case if needed, or simply ignore it
    }
  }

  approveRequest(id: number): void {
    this.auditService.approveRequest(id).subscribe(
      (response) => {
        alert('Request approved successfully');
        this.getAudit();
      },
      (error) => {
        alert('Failed to approve request');
      }
    );
  }



  goToContract(id:number){
    this.router.navigate(['Admin/navigation/audit-contract',{id}])
   
  }
}
