import { TestBed } from '@angular/core/testing';

import { ComunityCreationService } from './comunity-creation.service';

describe('ComunityCreationService', () => {
  let service: ComunityCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunityCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
