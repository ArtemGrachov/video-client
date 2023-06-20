import { TestBed } from '@angular/core/testing';

import { UserFormDataService } from './user-form-data.service';

describe('UserFormDataService', () => {
  let service: UserFormDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
