import { TestBed } from '@angular/core/testing';

import { OffreSpecialService } from './offre-special.service';

describe('OffreSpecialService', () => {
  let service: OffreSpecialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffreSpecialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
