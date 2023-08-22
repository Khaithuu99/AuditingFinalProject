import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountingService } from '../../Services/Accounting/accounting.service';

@Component({
  selector: 'app-admin-account-contract-form',
  templateUrl: './admin-account-contract-form.component.html',
  styleUrls: ['./admin-account-contract-form.component.css']
})
export class AdminAccountContractFormComponent {
  accountContractForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private accountService:AccountingService, 
    private route: ActivatedRoute,  private router: Router) {}

  ngOnInit() {
    this.accountContractForm = this.formBuilder.group({
      contractTitle: ['', Validators.required],
      contractDescription: ['', Validators.required],
      contractType: ['', Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      termsAndConditions: ['', Validators.required],
      pricingDetails: ['', Validators.required],
      additionalNotes: ['', Validators.required],
      accountId:[this.route.snapshot.params['id']]
    });
  }

  createContract(){
    this.accountService.createContract(this.accountContractForm.value).subscribe(response=>{
      this.router.navigate(['Admin/navigation/account-table']);
      alert('Contract created successfully!')
    }, error=>{
      alert('Failed to create contract!')
    })
  }
}
