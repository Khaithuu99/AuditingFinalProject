import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAccountListComponent } from './client-account-list.component';

describe('ClientAccountListComponent', () => {
  let component: ClientAccountListComponent;
  let fixture: ComponentFixture<ClientAccountListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAccountListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientAccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
