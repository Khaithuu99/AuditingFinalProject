import { TestBed } from '@angular/core/testing';

import { ConsaltantService } from './consaltant.service';

describe('ConsaltantService', () => {
  let service: ConsaltantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsaltantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
