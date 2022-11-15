import { TestBed } from '@angular/core/testing';

import { ShortCoursesResolverGuard } from './short-courses-resolver.guard';

describe('ShortCoursesResolverGuard', () => {
  let guard: ShortCoursesResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ShortCoursesResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
