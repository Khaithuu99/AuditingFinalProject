import { Component } from '@angular/core';
import { AccountingService } from '../../Services/Accounting/accounting.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accounting-contract-view',
  templateUrl: './accounting-contract-view.component.html',
  styleUrls: ['./accounting-contract-view.component.css']
})
export class AccountingContractViewComponent {

  constructor(private accountService:AccountingService, private route: ActivatedRoute){}

  ngOnInit(){
    this.viewContract();
  }
  
  accountContract!: any;
  viewContract(){
    const id = this.route.snapshot.params['id'];
  
    this.accountService.viewContract(id).subscribe(data=>{
      this.accountContract = data;
      console.log(data);
    })
  }
}
