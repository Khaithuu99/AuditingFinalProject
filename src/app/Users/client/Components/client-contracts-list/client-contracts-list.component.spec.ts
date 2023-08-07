import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientContractsListComponent } from './client-contracts-list.component';

describe('ClientContractsListComponent', () => {
  let component: ClientContractsListComponent;
  let fixture: ComponentFixture<ClientContractsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientContractsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientContractsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
