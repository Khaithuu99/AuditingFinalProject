import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingContractListComponent } from './accounting-contract-list.component';

describe('AccountingContractListComponent', () => {
  let component: AccountingContractListComponent;
  let fixture: ComponentFixture<AccountingContractListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingContractListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountingContractListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
