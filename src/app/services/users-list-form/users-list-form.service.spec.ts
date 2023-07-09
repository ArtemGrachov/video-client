import { TestBed } from '@angular/core/testing';

import { UsersListFormService } from './users-list-form.service';

describe('UsersListFormService', () => {
  let service: UsersListFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersListFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
