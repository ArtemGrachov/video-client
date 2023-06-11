import { TestBed } from '@angular/core/testing';

import { ViewCommentEditModalService } from './view-comment-edit-modal.service';

describe('ViewCommentEditModalService', () => {
  let service: ViewCommentEditModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewCommentEditModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
