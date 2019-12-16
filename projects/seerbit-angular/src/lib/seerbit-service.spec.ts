import { TestBed } from '@angular/core/testing';

import { SeerbitService } from './seerbit-service';

describe('SeerbitServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeerbitService = TestBed.get(SeerbitService);
    expect(service).toBeTruthy();
  });
});
