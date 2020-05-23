import { TestBed } from '@angular/core/testing';

import { RecepServiceService } from './recep-service.service';

describe('RecepServiceService', () => {
  let service: RecepServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecepServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
