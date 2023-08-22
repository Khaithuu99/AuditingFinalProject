import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuditContractViewComponent } from './admin-audit-contract-view.component';

describe('AdminAuditContractViewComponent', () => {
  let component: AdminAuditContractViewComponent;
  let fixture: ComponentFixture<AdminAuditContractViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAuditContractViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAuditContractViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
