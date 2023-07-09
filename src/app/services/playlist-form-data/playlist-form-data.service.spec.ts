import { TestBed } from '@angular/core/testing';

import { PlaylistFormDataService } from './playlist-form-data.service';

describe('PlaylistFormDataService', () => {
  let service: PlaylistFormDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaylistFormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
