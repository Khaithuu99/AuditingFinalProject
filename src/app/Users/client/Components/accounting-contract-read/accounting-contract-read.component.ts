import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountingService } from '../../Services/Accounting/accounting.service';

@Component({
  selector: 'app-accounting-contract-read',
  templateUrl: './accounting-contract-read.component.html',
  styleUrls: ['./accounting-contract-read.component.css']
})
export class AccountingContractReadComponent {
  constructor(private accountService:AccountingService, private route: ActivatedRoute, private router: Router){}

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
      // User clicked "Cancel" on the confirmation prompt.
      // You can optionally provide some feedback to the user here.
    }
  }

}
