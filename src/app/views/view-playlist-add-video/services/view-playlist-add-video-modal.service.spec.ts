import { TestBed } from '@angular/core/testing';

import { ViewPlaylistAddVideoModalService } from './view-playlist-add-video-modal.service';

describe('ViewPlaylistAddVideoModalService', () => {
  let service: ViewPlaylistAddVideoModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewPlaylistAddVideoModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
