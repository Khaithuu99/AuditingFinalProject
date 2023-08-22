import { Component } from '@angular/core';
import { AuditService } from '../../Services/Audit/audit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-audit-contract-view',
  templateUrl: './audit-contract-view.component.html',
  styleUrls: ['./audit-contract-view.component.css']
})
export class AuditContractViewComponent {

constructor(private auditService:AuditService, private route: ActivatedRoute, private router:Router){}

ngOnInit(){
  this.viewContract();
}

contract!: any;
viewContract(){
  const id = this.route.snapshot.params['id'];

  this.auditService.viewContract(id).subscribe(data=>{
    this.contract = data;
    console.log(data);
  })
}

agreeContract() {
  const confirmation = window.confirm("Are you sure you want to agree to the contract?");
  
  if (confirmation) {
    this.auditService.updateContractStatus(this.route.snapshot.params['id']).subscribe(
      response => {
        alert("Contract Agreed Successfully");
        this.router.navigate(['Client/nav/audit-list'])
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

cancelContract() {
  const confirmation = window.confirm("Are you sure you want to cancel the contract?");
  
  if (confirmation) {
    this.auditService.cancelContractStatus(this.route.snapshot.params['id']).subscribe(
      response => {
        alert("Contract cancelled Successfully");
        this.router.navigate(['Client/nav/audit-list'])
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
