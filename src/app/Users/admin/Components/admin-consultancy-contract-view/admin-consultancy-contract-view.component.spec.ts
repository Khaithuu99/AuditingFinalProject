import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConsultancyContractViewComponent } from './admin-consultancy-contract-view.component';

describe('AdminConsultancyContractViewComponent', () => {
  let component: AdminConsultancyContractViewComponent;
  let fixture: ComponentFixture<AdminConsultancyContractViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConsultancyContractViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminConsultancyContractViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
