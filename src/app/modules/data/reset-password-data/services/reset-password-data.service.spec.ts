import { TestBed } from '@angular/core/testing';

import { ResetPasswordDataService } from './reset-password-data.service';

describe('ResetPasswordDataService', () => {
  let service: ResetPasswordDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResetPasswordDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
