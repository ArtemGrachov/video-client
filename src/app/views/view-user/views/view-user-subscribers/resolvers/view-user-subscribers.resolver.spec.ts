import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { viewUserSubscribersResolver } from './view-user-subscribers.resolver';

describe('viewUserSubscribersResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => viewUserSubscribersResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
