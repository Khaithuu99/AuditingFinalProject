import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ConsaltantService } from '../../Services/Consultancy/consaltant.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbDateStruct, NgbModalRef, NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-consaltant-table',
  templateUrl: './consaltant-table.component.html',
  styleUrls: ['./consaltant-table.component.css']
})
export class ConsaltantTableComponent {
  
  consaltant!:any[]
  model!: NgbDateStruct;
  modalRef: NgbModalRef | undefined;
 
 
  constructor(private elementRef: ElementRef, 
    private consaltantService: ConsaltantService, 
    private router: Router,
    config: NgbModalConfig, private modalService: NgbModal) {
      // customize default values of modals used by this component tree
      config.backdrop = 'static';
      config.keyboard = false;}


  ngOnInit(): void{
    this.getConsultant();
  }

  open(content:any) {
		this.modalService.open(content);
	}

  public getConsultant(){
    this.consaltantService.getConsultant().subscribe( data =>{
      this.consaltant = data
      console.log(data)
     
    })
  }
  
  viewConsultancy(consultancyId: number){
    this.router.navigate(['Admin/navigation/view-consultancy',{consultancyId}])
  }

  updateConsultant(id: number){
    this.router.navigate(['Admin/navigation/update-consaltant/',{id}])
  }

  openDeleteConfirmation(consultantId: number): void {
    const confirmResult = window.confirm('Are you sure you want to delete this accounting?');

    if (confirmResult) {
      // User clicked OK to delete the accounting
      this.deleteConsultant(consultantId);
    } else {
      // User clicked Cancel or closed the dialog
      // You can handle this case if needed, or simply ignore it
    }
  }

  public deleteConsultant(consultancyId:number){
    this.consaltantService.deleteConsultant(consultancyId).subscribe(
      (data)=>{
        alert('Deleted...!!!')
        this.getConsultant();
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
    this.consaltantService.approveRequest(id).subscribe(
      (response) => {
        alert('Request approved successfully');
        this.getConsultant();
      },
      (error) => {
        alert('Failed to approve request');
      }
    );
  }






  goToContract(id: number){
    this.router.navigate(['Admin/navigation/consultancy-contract',{id}])
  }

  engageForm: FormGroup = new FormGroup({
    engagementDate: new FormControl ('', [Validators.required])
  });

  engagement: any;
  setEngagement(id:any){
    this.consaltantService.setEngagement(id, this.engageForm.value).subscribe(respo=>{
      alert("Engagement date set Successfully");
      this.getConsultant();
    }, error=>{
      alert("Failed to set engagement error")
    })
  }


}
