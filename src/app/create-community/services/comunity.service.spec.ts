import { TestBed } from '@angular/core/testing';

import { ComunityService } from './comunity.service';

describe('ComunityService', () => {
  let service: ComunityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
