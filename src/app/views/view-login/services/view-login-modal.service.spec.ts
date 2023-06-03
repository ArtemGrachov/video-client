import { TestBed } from '@angular/core/testing';

import { ViewLoginModalService } from './view-login-modal.service';

describe('ViewLoginModalService', () => {
  let service: ViewLoginModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewLoginModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
