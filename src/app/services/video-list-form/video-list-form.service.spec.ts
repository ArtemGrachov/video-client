import { TestBed } from '@angular/core/testing';

import { VideoListFormService } from './video-list-form.service';

describe('VideoListFormService', () => {
  let service: VideoListFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoListFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
