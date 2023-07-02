import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { viewUserResolver } from './view-user.resolver';

describe('viewUserResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => viewUserResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
