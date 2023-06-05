import { TestBed } from '@angular/core/testing';

import { CommentsListDataService } from './comments-list-data.service';

describe('CommentsListDataService', () => {
  let service: CommentsListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentsListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
