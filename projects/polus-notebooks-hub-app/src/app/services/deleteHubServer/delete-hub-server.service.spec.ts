import { TestBed } from '@angular/core/testing';

import { DeleteHubServerService } from './delete-hub-server.service';

describe('DeleteHubServerService', () => {
  let service: DeleteHubServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteHubServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
