import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDashComponent } from './nav-dash.component';

describe('NavDashComponent', () => {
  let component: NavDashComponent;
  let fixture: ComponentFixture<NavDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
