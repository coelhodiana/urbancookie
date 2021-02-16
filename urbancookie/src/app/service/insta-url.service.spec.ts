import { TestBed } from '@angular/core/testing';

import { InstaUrlService } from './insta-url.service';

describe('InstaUrlService', () => {
  let service: InstaUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstaUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
