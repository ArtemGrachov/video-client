import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { viewNewsResolver } from './view-news.resolver';

describe('viewNewsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => viewNewsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
