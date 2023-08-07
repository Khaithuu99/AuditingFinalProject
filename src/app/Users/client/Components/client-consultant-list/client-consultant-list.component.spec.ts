import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientConsultantListComponent } from './client-consultant-list.component';

describe('ClientConsultantListComponent', () => {
  let component: ClientConsultantListComponent;
  let fixture: ComponentFixture<ClientConsultantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientConsultantListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientConsultantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
