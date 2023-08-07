import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContractFormComponent } from './admin-contract-form.component';

describe('AdminContractFormComponent', () => {
  let component: AdminContractFormComponent;
  let fixture: ComponentFixture<AdminContractFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminContractFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminContractFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
