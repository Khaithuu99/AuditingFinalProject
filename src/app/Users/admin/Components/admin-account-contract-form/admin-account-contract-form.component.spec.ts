import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccountContractFormComponent } from './admin-account-contract-form.component';

describe('AdminAccountContractFormComponent', () => {
  let component: AdminAccountContractFormComponent;
  let fixture: ComponentFixture<AdminAccountContractFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAccountContractFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccountContractFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
