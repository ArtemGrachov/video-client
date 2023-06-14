import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { viewPlaylistsResolver } from './view-playlists.resolver';

describe('viewPlaylistsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => viewPlaylistsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
