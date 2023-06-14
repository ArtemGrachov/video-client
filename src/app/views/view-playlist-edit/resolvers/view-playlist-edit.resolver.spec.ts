import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { viewPlaylistEditResolver } from './view-playlist-edit.resolver';

describe('viewPlaylistEditResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => viewPlaylistEditResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
