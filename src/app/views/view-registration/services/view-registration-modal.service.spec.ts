import { TestBed } from '@angular/core/testing';

import { ViewRegistrationModalService } from './view-registration-modal.service';

describe('ViewRegistrationModalService', () => {
  let service: ViewRegistrationModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewRegistrationModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
