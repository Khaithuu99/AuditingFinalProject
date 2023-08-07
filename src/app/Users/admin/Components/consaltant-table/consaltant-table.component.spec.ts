import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsaltantTableComponent } from './consaltant-table.component';

describe('ConsaltantTableComponent', () => {
  let component: ConsaltantTableComponent;
  let fixture: ComponentFixture<ConsaltantTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsaltantTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsaltantTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
