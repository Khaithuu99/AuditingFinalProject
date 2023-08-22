import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditContractReadComponent } from './audit-contract-read.component';

describe('AuditContractReadComponent', () => {
  let component: AuditContractReadComponent;
  let fixture: ComponentFixture<AuditContractReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditContractReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditContractReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
