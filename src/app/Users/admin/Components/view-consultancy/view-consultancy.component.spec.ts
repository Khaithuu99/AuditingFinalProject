import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConsultancyComponent } from './view-consultancy.component';

describe('ViewConsultancyComponent', () => {
  let component: ViewConsultancyComponent;
  let fixture: ComponentFixture<ViewConsultancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewConsultancyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewConsultancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
