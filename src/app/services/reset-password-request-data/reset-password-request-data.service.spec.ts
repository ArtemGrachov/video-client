import { TestBed } from '@angular/core/testing';

import { ResetPasswordRequestDataService } from './reset-password-request-data.service';

describe('ResetPasswordRequestDataService', () => {
  let service: ResetPasswordRequestDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResetPasswordRequestDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
