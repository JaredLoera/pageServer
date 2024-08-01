import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { islogGuard } from './islog.guard';

describe('islogGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => islogGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
