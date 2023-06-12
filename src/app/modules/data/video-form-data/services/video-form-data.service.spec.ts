import { TestBed } from '@angular/core/testing';

import { VideoFormDataService } from './video-form-data.service';

describe('VideoFormDataService', () => {
  let service: VideoFormDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoFormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
