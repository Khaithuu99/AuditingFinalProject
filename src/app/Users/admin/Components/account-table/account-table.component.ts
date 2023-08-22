import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AccountingService } from '../../Services/Accounting/accounting.service';
import { NgbDateStruct, NgbModal, NgbModalConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-table',
  templateUrl: './account-table.component.html',
  styleUrls: ['./account-table.component.css']
})
export class AccountTableComponent {
  accounting!: any[]
  model!: NgbDateStruct;
  modalRef: NgbModalRef | undefined;

  constructor(private elementRef: ElementRef, private accountingServices: AccountingService, private router: Router,
    config: NgbModalConfig, private modalService: NgbModal) {
      // customize default values of modals used by this component tree
      config.backdrop = 'static';
      config.keyboard = false;}

  ngOnInit(): void{
    this.getAccounting();
  }

  open(content:any) {
		this.modalService.open(content);
	}

  public getAccounting(){
    this.accountingServices.getAccount().subscribe( data =>{
      this.accounting = data
      console.log(data)
     
    })
  }

  
  viewAccount(accountId: number){
    this.router.navigate(['Admin/navigation/view-account',{accountId}])
  }
  


  openDeleteConfirmation(accountId: number): void {
    const confirmResult = window.confirm('Are you sure you want to delete this accounting?');

    if (confirmResult) {
      // User clicked OK to delete the accounting
      this.deleteAccounting(accountId);
    } else {
      // User clicked Cancel or closed the dialog
      // You can handle this case if needed, or simply ignore it
    }
  }

  deleteAccounting(accountId: number): void {
    this.accountingServices.deleteAccount(accountId).subscribe(
      (data) => {
        alert('Deleted...!!!');
        this.getAccounting(); // Assuming this method gets updated data after deletion
      },
      (error) => {
        alert('Failed...!!!');
      }
    );
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
    this.accountingServices.approveRequest(id).subscribe(
      (response) => {
        alert('Request approved successfully');
        this.getAccounting();
      },
      (error) => {
        alert('Failed to approve request');
      }
    );
  }


  goToContract(id:number){
    this.router.navigate(['Admin/navigation/account-contract',{id}]);
  }

  engageForm: FormGroup = new FormGroup({
    engagementDate: new FormControl ('', [Validators.required])
  });

  engagement: any;
  setEngagement(id:any){
    this.accountingServices.setEngagement(id, this.engageForm.value).subscribe(respo=>{
      alert("Engagement date set Successfully");
      this.getAccounting();
    }, error=>{
      alert("Failed to set engagement error")
    })
  }
}


