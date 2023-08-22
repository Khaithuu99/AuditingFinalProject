import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditContractsListComponent } from './audit-contracts-list.component';

describe('AuditContractsListComponent', () => {
  let component: AuditContractsListComponent;
  let fixture: ComponentFixture<AuditContractsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditContractsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditContractsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
