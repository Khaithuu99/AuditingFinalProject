import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsaltantService } from '../../Services/Consultancy/consaltant.service';

@Component({
  selector: 'app-admin-contract-form',
  templateUrl: './admin-contract-form.component.html',
  styleUrls: ['./admin-contract-form.component.css']
})
export class AdminContractFormComponent {

  contractForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private route:ActivatedRoute, 
    private consultancyService:ConsaltantService, private router:Router) {}

  ngOnInit() {
    this.contractForm = this.formBuilder.group({
      contractTitle: ['', Validators.required],
      contractDescription: ['', Validators.required],
      contractType: ['', Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      termsAndConditions: ['', Validators.required],
      pricingDetails: ['', Validators.required],
      additionalNotes:  ['', Validators.required],
      consultancyId:[this.route.snapshot.params['id']],
    });
  }


  createContract(){
    this.consultancyService.createContract(this.contractForm.value).subscribe(response=>{
      this.router.navigate(['Admin/navigation/consaltant-table']);
      alert('Contract Created Successfully!')
    }, error=>{
      alert("Failed to create contract")
    })
  }

}
