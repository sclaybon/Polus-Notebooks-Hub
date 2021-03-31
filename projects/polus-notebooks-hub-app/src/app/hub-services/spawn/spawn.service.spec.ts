import {TestBed} from '@angular/core/testing';

import {SpawnService} from './spawn.service';

describe('SpawnService', () => {
  let service: SpawnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpawnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
