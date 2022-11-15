import { TestBed } from '@angular/core/testing';

import { EmploymentHistoryResolverGuard } from './employment-history-resolver.guard';

describe('EmploymentHistoryResolverGuard', () => {
  let guard: EmploymentHistoryResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmploymentHistoryResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
