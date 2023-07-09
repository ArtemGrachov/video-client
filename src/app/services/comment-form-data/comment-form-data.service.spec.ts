import { TestBed } from '@angular/core/testing';

import { CommentFormDataService } from './comment-form-data.service';

describe('CommentFormDataService', () => {
  let service: CommentFormDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentFormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
