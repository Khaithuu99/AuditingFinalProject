import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditContractViewComponent } from './audit-contract-view.component';

describe('AuditContractViewComponent', () => {
  let component: AuditContractViewComponent;
  let fixture: ComponentFixture<AuditContractViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditContractViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditContractViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
