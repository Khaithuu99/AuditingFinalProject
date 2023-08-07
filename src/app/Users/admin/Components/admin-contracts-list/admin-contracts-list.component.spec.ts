import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContractsListComponent } from './admin-contracts-list.component';

describe('AdminContractsListComponent', () => {
  let component: AdminContractsListComponent;
  let fixture: ComponentFixture<AdminContractsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminContractsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminContractsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
