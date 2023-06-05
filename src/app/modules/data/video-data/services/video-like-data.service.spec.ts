import { TestBed } from '@angular/core/testing';

import { VideoLikeDataService } from './video-like-data.service';

describe('VideoLikeDataService', () => {
  let service: VideoLikeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoLikeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
