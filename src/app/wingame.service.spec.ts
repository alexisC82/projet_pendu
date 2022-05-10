import { TestBed } from '@angular/core/testing';

import { WingameService } from './wingame.service';

describe('WingameService', () => {
  let service: WingameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WingameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
