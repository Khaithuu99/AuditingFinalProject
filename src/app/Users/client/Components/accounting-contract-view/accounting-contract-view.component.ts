import { Component } from '@angular/core';
import { AccountingService } from '../../Services/Accounting/accounting.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-accounting-contract-view',
  templateUrl: './accounting-contract-view.component.html',
  styleUrls: ['./accounting-contract-view.component.css']
})
export class AccountingContractViewComponent {

constructor(private accountService:AccountingService, private route: ActivatedRoute,
    private router: Router){}

  ngOnInit(){
    this.viewContract();
  }
  
  contract!: any;

  viewContract(){
    const id = this.route.snapshot.params['id'];
  
    this.accountService.viewContract(id).subscribe(data=>{
      this.contract = data;
      console.log(data);
    })
  }
  
  
agreeContract() {
  const confirmation = window.confirm("Are you sure you want to agree to the contract?");
  
  if (confirmation) {
    this.accountService.updateContractStatus(this.route.snapshot.params['id']).subscribe(
      response => {
        alert("Contract Agreed Successfully");
        this.router.navigate(['Client/nav/account-list'])
      },
      error => {
        alert("Failed to agree to the contract");
      }
    );
  } else {
    // console.log("Action canceled.");
    // You can optionally provide some feedback to the user here.
  }
}

cancelContract() {
  const confirmation = window.confirm("Are you sure you want to cancel the contract?");
  
  if (confirmation) {
    this.accountService.cancelContractStatus(this.route.snapshot.params['id']).subscribe(
      response => {
        alert("Contract cancelled Successfully");
        this.router.navigate(['Client/nav/account-list'])
      },
      error => {
        alert("Failed to cancel the contract");
      }
    );
  } else {
    // User clicked "Cancel" on the confirmation prompt.
    // You can optionally provide some feedback to the user here.
  }
}



}
