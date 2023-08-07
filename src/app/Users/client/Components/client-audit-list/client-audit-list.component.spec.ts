import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAuditListComponent } from './client-audit-list.component';

describe('ClientAuditListComponent', () => {
  let component: ClientAuditListComponent;
  let fixture: ComponentFixture<ClientAuditListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAuditListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientAuditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
