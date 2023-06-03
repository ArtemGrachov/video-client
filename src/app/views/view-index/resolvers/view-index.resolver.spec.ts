import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { viewIndexResolver } from './view-index.resolver';

describe('viewIndexResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => viewIndexResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
