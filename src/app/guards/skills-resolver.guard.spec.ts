import { TestBed } from '@angular/core/testing';

import { SkillsResolverGuard } from './skills-resolver.guard';

describe('SkillsResolverGuard', () => {
  let guard: SkillsResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SkillsResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
