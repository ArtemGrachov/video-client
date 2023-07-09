import { TestBed } from '@angular/core/testing';

import { UsersListDataService } from './users-list-data.service';

describe('UsersListDataService', () => {
  let service: UsersListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
