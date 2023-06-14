import { TestBed } from '@angular/core/testing';

import { PlaylistsListDataService } from './playlists-list-data.service';

describe('PlaylistsListDataService', () => {
  let service: PlaylistsListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaylistsListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
