import { Component } from '@angular/core';
import { client } from 'src/app/Users/client/Services/client';
import { ClientService } from 'src/app/Users/client/Services/client.service';
import { AccountingService } from '../../Services/accounting.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent {
  client: client = new client();

  constructor(private clientService: ClientService, private accountingService: AccountingService,
    private route: ActivatedRoute){}

  ngOnInit(): void{
    this.viewAccount();
  }

  accounting!: any
  viewAccount(){
const id = this.route.snapshot.params['accountId'];
    this.accountingService.getAccountById(id).subscribe(data=>{
      this.accounting  = data;
      console.log(data);
    })

  }

}
