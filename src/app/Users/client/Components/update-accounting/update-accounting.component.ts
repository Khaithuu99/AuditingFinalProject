import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountingService } from '../../Services/Accounting/accounting.service';
import { accounting } from '../../Services/Accounting/accounting';

@Component({
  selector: 'app-update-accounting',
  templateUrl: './update-accounting.component.html',
  styleUrls: ['./update-accounting.component.css']
})
export class UpdateAccountingComponent {

  id!:number;
  accounting: accounting  = new accounting();

  constructor(private accountingService: AccountingService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void{
    
    this.id = this.route.snapshot.params['accountId'];
    
    this.accountingService.getAccountById(this.id).subscribe(data=>{
      this.accounting=data;
      console.log(data)
    });
  }

  updateAccount(){
    this.accountingService.updateAccount(this.id,this.accounting).subscribe(data=>{
      alert("updated...!!!")
      this.router.navigate(['Client/nav/account-list'])
    },
    (Error)=>{
      alert("failled...!!!")
    })
  }
}
