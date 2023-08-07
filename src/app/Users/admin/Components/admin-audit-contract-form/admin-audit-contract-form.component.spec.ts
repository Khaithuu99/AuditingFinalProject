import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuditContractFormComponent } from './admin-audit-contract-form.component';

describe('AdminAuditContractFormComponent', () => {
  let component: AdminAuditContractFormComponent;
  let fixture: ComponentFixture<AdminAuditContractFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAuditContractFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAuditContractFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
