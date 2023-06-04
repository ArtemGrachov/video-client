import { TestBed } from '@angular/core/testing';

import { ViewResetPasswordRequestModalService } from './view-reset-password-request-modal.service';

describe('ViewResetPasswordRequestModalService', () => {
  let service: ViewResetPasswordRequestModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewResetPasswordRequestModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
