import { TestBed } from '@angular/core/testing';

import { EducationResolverGuard } from './education-resolver.guard';

describe('EducationResolverGuard', () => {
  let guard: EducationResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EducationResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
