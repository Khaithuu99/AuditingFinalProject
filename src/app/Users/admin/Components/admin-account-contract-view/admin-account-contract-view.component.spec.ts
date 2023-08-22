import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccountContractViewComponent } from './admin-account-contract-view.component';

describe('AdminAccountContractViewComponent', () => {
  let component: AdminAccountContractViewComponent;
  let fixture: ComponentFixture<AdminAccountContractViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAccountContractViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccountContractViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
