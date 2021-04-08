import {TestBed} from '@angular/core/testing';

import {fileTreeService} from './filetree.service';

describe('FiletreeService', () => {
  let service: fileTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(fileTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
