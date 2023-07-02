import { TestBed } from '@angular/core/testing';

import { PlaylistAddVideoDataService } from './playlist-add-video-data.service';

describe('PlaylistAddVideoDataService', () => {
  let service: PlaylistAddVideoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaylistAddVideoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
