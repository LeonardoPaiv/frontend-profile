import { TestBed } from '@angular/core/testing';

import { SoftSkillsResolverGuard } from './soft-skills-resolver.guard';

describe('SoftSkillsResolverGuard', () => {
  let guard: SoftSkillsResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SoftSkillsResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
