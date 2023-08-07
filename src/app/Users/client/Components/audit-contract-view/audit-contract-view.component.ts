import { Component } from '@angular/core';
import { AuditService } from '../../Services/Audit/audit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-audit-contract-view',
  templateUrl: './audit-contract-view.component.html',
  styleUrls: ['./audit-contract-view.component.css']
})
export class AuditContractViewComponent {

constructor(private auditService:AuditService, private route: ActivatedRoute){}

ngOnInit(){
  this.viewContract();
}

auditContract!: any;
viewContract(){
  const id = this.route.snapshot.params['id'];

  this.auditService.viewContract(id).subscribe(data=>{
    this.auditContract = data;
    console.log(data);
  })
}

}
