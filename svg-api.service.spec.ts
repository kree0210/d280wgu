import { TestBed } from '@angular/core/testing';

import { SvgApiService } from './svg-api.service';

describe('SvgApiService', () => {
  let service: SvgApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvgApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
