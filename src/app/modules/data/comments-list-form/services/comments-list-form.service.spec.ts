import { TestBed } from '@angular/core/testing';

import { CommentsListFormService } from './comments-list-form.service';

describe('CommentsListFormService', () => {
  let service: CommentsListFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentsListFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
