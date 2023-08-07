import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuditService } from 'src/app/Users/admin/Services/audit.service';

@Component({
  selector: 'app-audit-form',
  templateUrl: './audit-form.component.html',
  styleUrls: ['./audit-form.component.css']
})
export class AuditFormComponent {

  auditForm: FormGroup = new FormGroup({
    clientId: new FormControl(localStorage.getItem('clientId')),
    financialYear: new FormControl('', [Validators.required]),
    areaAudit: new FormControl('', [Validators.required]),
    auditingType: new FormControl('', [Validators.required]),
    auditingStandard: new FormControl('', [Validators.required]),
    financialStatement: new FormControl('', [Validators.required]),
    previousAudit: new FormControl('', [Validators.required])
  })

  constructor(private auditService: AuditService, private router: Router){}

  public addAudit(){
    this.auditService.addAudit(this.auditForm.value).subscribe( data =>{
      alert('Successfullyy...!!!')
      this.router.navigate(['Client/nav/audit-list']);
      this.auditForm.reset();
    },
      (Error)=>{
        alert('Failed..!!!')
      } );
  }

}
