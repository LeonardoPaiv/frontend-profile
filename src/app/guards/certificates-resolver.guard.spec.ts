import { TestBed } from '@angular/core/testing';

import { CertificatesResolverGuard } from './certificates-resolver.guard';

describe('CertificatesResolverGuard', () => {
  let guard: CertificatesResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CertificatesResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
