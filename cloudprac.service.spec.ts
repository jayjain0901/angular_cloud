import { TestBed } from '@angular/core/testing';

import { CloudpracService } from './cloudprac.service';

describe('CloudpracService', () => {
  let service: CloudpracService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloudpracService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
