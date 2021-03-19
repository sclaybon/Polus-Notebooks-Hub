import {TestBed} from '@angular/core/testing';

import {PolusNotebooksHubService} from './polus-notebooks-hub.service';

describe('PolusNotebooksHubService', () => {
  let service: PolusNotebooksHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolusNotebooksHubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
