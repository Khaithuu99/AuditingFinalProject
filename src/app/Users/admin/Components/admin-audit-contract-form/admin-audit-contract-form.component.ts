import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuditService } from '../../Services/audit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-audit-contract-form',
  templateUrl: './admin-audit-contract-form.component.html',
  styleUrls: ['./admin-audit-contract-form.component.css']
})
export class AdminAuditContractFormComponent {
  auditContractForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private auditService:AuditService, private route:ActivatedRoute) {}

  ngOnInit() {
    this.auditContractForm = this.formBuilder.group({
      contractTitle: ['', Validators.required],
      contractDescription: ['', Validators.required],
      contractType: ['', Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      termsAndConditions: ['', Validators.required],
      pricingDetails: ['', Validators.required],
      additionalNotes:['', Validators.required],
      auditId:[this.route.snapshot.params['id']]
    });
  }

  createContract(){
    this.auditService.createContract(this.auditContractForm.value).subscribe(response=>{
      alert('Contract created successfully!')
    }, error=>{
      alert('Failed to create contract!')
    })
  }
}
