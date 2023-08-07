import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConsaltantComponent } from './update-consaltant.component';

describe('UpdateConsaltantComponent', () => {
  let component: UpdateConsaltantComponent;
  let fixture: ComponentFixture<UpdateConsaltantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateConsaltantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateConsaltantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
