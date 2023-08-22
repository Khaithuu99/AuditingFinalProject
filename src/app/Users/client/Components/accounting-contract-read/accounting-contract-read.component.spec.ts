import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingContractReadComponent } from './accounting-contract-read.component';

describe('AccountingContractReadComponent', () => {
  let component: AccountingContractReadComponent;
  let fixture: ComponentFixture<AccountingContractReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingContractReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountingContractReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
