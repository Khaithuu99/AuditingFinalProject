import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountingService } from '../../Services/Accounting/accounting.service';

@Component({
  selector: 'app-admin-account-contract-view',
  templateUrl: './admin-account-contract-view.component.html',
  styleUrls: ['./admin-account-contract-view.component.css']
})
export class AdminAccountContractViewComponent {
  constructor(private accountingService: AccountingService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.viewContract();
  }
  
  contract!: any;
  viewContract(){
    const id = this.route.snapshot.params['id'];
  
    this.accountingService.viewContract(id).subscribe(data=>{
      this.contract = data;
      console.log(data);
    })
  }
}
