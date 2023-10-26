import { TestBed } from '@angular/core/testing';

import { StudentAboutService } from './student-about.service';

describe('StudentAboutService', () => {
  let service: StudentAboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentAboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
