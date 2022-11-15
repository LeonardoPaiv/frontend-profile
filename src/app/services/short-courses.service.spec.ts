import { TestBed } from '@angular/core/testing';

import { ShortCoursesService } from './short-courses.service';

describe('ShortCoursesService', () => {
  let service: ShortCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
