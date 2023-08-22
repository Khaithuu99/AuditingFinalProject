import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultancyContractReadComponent } from './consultancy-contract-read.component';

describe('ConsultancyContractReadComponent', () => {
  let component: ConsultancyContractReadComponent;
  let fixture: ComponentFixture<ConsultancyContractReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultancyContractReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultancyContractReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
