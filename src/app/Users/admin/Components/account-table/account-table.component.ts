import { Component, ElementRef } from '@angular/core';
import { AccountingService } from '../../Services/accounting.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-table',
  templateUrl: './account-table.component.html',
  styleUrls: ['./account-table.component.css']
})
export class AccountTableComponent {
  accounting!: any[]

  constructor(private elementRef: ElementRef, private accountingServices: AccountingService, private router: Router){}

  ngOnInit(): void{
    this.getAccounting();
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
}
