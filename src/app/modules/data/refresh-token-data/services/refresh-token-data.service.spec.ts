import { TestBed } from '@angular/core/testing';

import { RefreshTokenDataService } from './refresh-token-data.service';

describe('RefreshTokenDataService', () => {
  let service: RefreshTokenDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefreshTokenDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
