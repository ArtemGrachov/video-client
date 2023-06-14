import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { viewPlaylistResolver } from './view-playlist.resolver';

describe('viewPlaylistResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => viewPlaylistResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
