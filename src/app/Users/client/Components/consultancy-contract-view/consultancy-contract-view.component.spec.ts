import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultancyContractViewComponent } from './consultancy-contract-view.component';

describe('ConsultancyContractViewComponent', () => {
  let component: ConsultancyContractViewComponent;
  let fixture: ComponentFixture<ConsultancyContractViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultancyContractViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultancyContractViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
