import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { viewUsersResolver } from './view-users.resolver';

describe('viewUsersResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => viewUsersResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
