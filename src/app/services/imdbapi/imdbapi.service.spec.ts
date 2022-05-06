import { TestBed } from '@angular/core/testing';

import { ApoService } from './imdbapi.service';

describe('ApoService', () => {
  let service: ApoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
