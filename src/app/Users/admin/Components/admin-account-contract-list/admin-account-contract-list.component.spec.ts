import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccountContractListComponent } from './admin-account-contract-list.component';

describe('AdminAccountContractListComponent', () => {
  let component: AdminAccountContractListComponent;
  let fixture: ComponentFixture<AdminAccountContractListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAccountContractListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccountContractListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
