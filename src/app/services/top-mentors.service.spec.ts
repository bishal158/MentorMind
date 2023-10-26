import { TestBed } from '@angular/core/testing';

import { TopMentorsService } from './top-mentors.service';

describe('TopMentorsService', () => {
  let service: TopMentorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopMentorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
