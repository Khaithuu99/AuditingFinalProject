import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuditService } from 'src/app/services/audit.service';

@Component({
  selector: 'app-audit-form',
  templateUrl: './audit-form.component.html',
  styleUrls: ['./audit-form.component.css']
})
export class AuditFormComponent {

  auditForm: FormGroup = new FormGroup({
    clientId: new FormControl(localStorage.getItem('clientId')),
    firmName: new FormControl('', [Validators.required]),
    firmType: new FormControl('', [Validators.required]),
    place: new FormControl('', [Validators.required]),
    financialYear: new FormControl('', [Validators.required]),
    areaAudit: new FormControl('', [Validators.required])
  })

  constructor(private auditService: AuditService, private router: Router){}

  public addAudit(){
    this.auditService.addAudit(this.auditForm.value).subscribe( data =>{
      alert('Successfullyy...!!!')
      this.router.navigate(['/nav/audit-table'])
    },
      (Error)=>{
        alert('Failed..!!!')
      } );
  }

}
