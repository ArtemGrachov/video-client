import { TestBed } from '@angular/core/testing';

import { PlaylistsFormDataService } from './playlists-form-data.service';

describe('PlaylistsFormDataService', () => {
  let service: PlaylistsFormDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaylistsFormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
