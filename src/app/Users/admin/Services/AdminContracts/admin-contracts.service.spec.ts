import { TestBed } from '@angular/core/testing';

import { AdminContractsService } from './admin-contracts.service';

describe('AdminContractsService', () => {
  let service: AdminContractsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminContractsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
