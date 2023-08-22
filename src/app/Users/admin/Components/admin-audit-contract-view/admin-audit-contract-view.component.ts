import { Component } from '@angular/core';
import { AuditService } from '../../Services/Audit/audit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-audit-contract-view',
  templateUrl: './admin-audit-contract-view.component.html',
  styleUrls: ['./admin-audit-contract-view.component.css']
})
export class AdminAuditContractViewComponent {
  constructor(private auditService: AuditService, private route: ActivatedRoute, private router: Router){}

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
}
