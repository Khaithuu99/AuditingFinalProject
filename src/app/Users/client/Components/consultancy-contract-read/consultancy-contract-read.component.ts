import { Component } from '@angular/core';
import { ConsultancyService } from '../../Services/Consultancy/consultancy.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consultancy-contract-read',
  templateUrl: './consultancy-contract-read.component.html',
  styleUrls: ['./consultancy-contract-read.component.css']
})
export class ConsultancyContractReadComponent {
  constructor(private consultancyService:ConsultancyService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.viewContract();
  }
  
  contract!: any;
  viewContract(){
    const id = this.route.snapshot.params['id'];
  
    this.consultancyService.viewContract(id).subscribe(data=>{
      this.contract = data;
      console.log(data);
    })
  }

  agreeContract() {
    const confirmation = window.confirm("Are you sure you want to agree to the contract?");
    
    if (confirmation) {
      this.consultancyService.updateContractStatus(this.route.snapshot.params['id']).subscribe(
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
