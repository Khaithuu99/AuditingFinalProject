import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccountingService } from 'src/app/Users/admin/Services/Accounting/accounting.service';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.css']
})
export class AccountingComponent {

  accountingForm!: FormGroup;

  constructor(private accountingService: AccountingService, private router: Router) {
    this.initializeForm();
  }


  initializeForm() {
    const clientId = localStorage.getItem('clientId') || '';
    this.accountingForm = new FormGroup({
      clientId: new FormControl(clientId),
      startingDate: new FormControl('', [Validators.required]),
      endingDate: new FormControl('', [Validators.required]),
      accountingPeriod: new FormControl('', [Validators.required]),
      financialStatements: new FormControl([], [Validators.required]),
      needBalanceSheet: new FormControl(false, [Validators.required]),
      needIncomeStatement: new FormControl(false, [Validators.required]),
      needcashFlow: new FormControl(false, [Validators.required]),
      needChangeInEquity: new FormControl(false, [Validators.required]),
      accountingStandard: new FormControl('', [Validators.required]),
      businessNature: new FormControl('', [Validators.required]),
      previousFinancialStatement: new FormControl('', [Validators.required])
    });
  }

  public addAccount() {
    const accountData = { ...this.accountingForm.value };
    accountData.financialStatements = this.getSelectedFinancialStatements();

      this.accountingService.addAccount(accountData).subscribe(
        (data) => { // Provide the ServerResponse type
          alert('Successfullyy...!!!');
          this.router.navigate(['Client/nav/account-list']);
          this.accountingForm.reset();
        },
        (error) => {
          alert('Failed..!!!');
        }
    );
  }

  getSelectedFinancialStatements(): string[] {
    const selectedFinancialStatements: string[] = [];

    if (this.accountingForm.controls['needBalanceSheet'].value) {
      selectedFinancialStatements.push('Balance Sheet');
    }
    if (this.accountingForm.controls['needIncomeStatement'].value) {
      selectedFinancialStatements.push('Income Statement');
    }
    if (this.accountingForm.controls['needcashFlow'].value) {
      selectedFinancialStatements.push('Cash Flow');
    }
    if (this.accountingForm.controls['needChangeInEquity'].value) {
      selectedFinancialStatements.push('Change in Equity');
    }

    return selectedFinancialStatements;
  }

}
