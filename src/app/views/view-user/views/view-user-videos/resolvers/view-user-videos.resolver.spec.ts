import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { viewUserVideosResolver } from './view-user-videos.resolver';

describe('viewUserVideosResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => viewUserVideosResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
