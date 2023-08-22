import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuditContractListComponent } from './admin-audit-contract-list.component';

describe('AdminAuditContractListComponent', () => {
  let component: AdminAuditContractListComponent;
  let fixture: ComponentFixture<AdminAuditContractListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAuditContractListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAuditContractListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
