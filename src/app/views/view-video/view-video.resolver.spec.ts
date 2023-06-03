import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { viewVideoResolver } from './view-video.resolver';

describe('viewVideoResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => viewVideoResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
