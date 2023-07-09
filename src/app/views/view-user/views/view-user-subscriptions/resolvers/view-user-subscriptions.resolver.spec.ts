import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { viewUserSubscriptionsResolver } from './view-user-subscriptions.resolver';

describe('viewUserSubscriptionsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => viewUserSubscriptionsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
