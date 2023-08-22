import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateStruct, NgbModal, NgbModalConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { audit } from 'rxjs';
import { AuditService } from 'src/app/Users/admin/Services/Audit/audit.service';

@Component({
  selector: 'app-audit-table',
  templateUrl: './audit-table.component.html',
  styleUrls: ['./audit-table.component.css']
})
export class AuditTableComponent{
  audit!:any[]
  model!: NgbDateStruct;
  modalRef: NgbModalRef | undefined;
 
  constructor(private elementRef: ElementRef, private auditService: AuditService, private router: Router,
    config: NgbModalConfig, private modalService: NgbModal) {
      // customize default values of modals used by this component tree
      config.backdrop = 'static';
      config.keyboard = false;}

  ngOnInit(): void{
    this.getAudit();
  }
 
  open(content:any) {
		this.modalService.open(content);
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

  engageForm: FormGroup = new FormGroup({
    engagementDate: new FormControl ('', [Validators.required])
  });

  engagement: any;
  setEngagement(id:any){
    this.auditService.setEngagement(id, this.engageForm.value).subscribe(respo=>{
      alert("Engagement date set Successfully");
      this.getAudit();
    }, error=>{
      alert("Failed to set engagement error")
    })
  }

}
