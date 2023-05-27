import { TestBed } from '@angular/core/testing';

import { VideoListDataService } from './video-list-data.service';

describe('VideoDataService', () => {
  let service: VideoListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
