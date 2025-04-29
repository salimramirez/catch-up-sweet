import { TestBed } from '@angular/core/testing';

import { HipolabsApiService } from './hipolabs-api.service';

describe('HipolabsApiService', () => {
  let service: HipolabsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HipolabsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
