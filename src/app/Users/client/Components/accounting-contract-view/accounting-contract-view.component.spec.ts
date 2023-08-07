import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingContractViewComponent } from './accounting-contract-view.component';

describe('AccountingContractViewComponent', () => {
  let component: AccountingContractViewComponent;
  let fixture: ComponentFixture<AccountingContractViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingContractViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountingContractViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
