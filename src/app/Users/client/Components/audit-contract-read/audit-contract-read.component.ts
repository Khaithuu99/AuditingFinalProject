import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuditService } from '../../Services/Audit/audit.service';

@Component({
  selector: 'app-audit-contract-read',
  templateUrl: './audit-contract-read.component.html',
  styleUrls: ['./audit-contract-read.component.css']
})
export class AuditContractReadComponent {

  constructor(private auditService:AuditService, private route: ActivatedRoute, private router: Router){}

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
  
  
 
  
}
