import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsaltantFormComponent } from './consaltant-form.component';

describe('ConsaltantFormComponent', () => {
  let component: ConsaltantFormComponent;
  let fixture: ComponentFixture<ConsaltantFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsaltantFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsaltantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
