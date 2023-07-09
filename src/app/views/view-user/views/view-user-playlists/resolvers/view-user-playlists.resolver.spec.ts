import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { viewUserPlaylistsResolver } from './view-user-playlists.resolver';

describe('viewUserPlaylistsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => viewUserPlaylistsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
