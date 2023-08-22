import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRegComponent } from './update-reg.component';

describe('UpdateRegComponent', () => {
  let component: UpdateRegComponent;
  let fixture: ComponentFixture<UpdateRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
