import { TestBed } from '@angular/core/testing';

import { GetAllMenteesService } from './get-all-mentees.service';

describe('GetAllMenteesService', () => {
  let service: GetAllMenteesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllMenteesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
