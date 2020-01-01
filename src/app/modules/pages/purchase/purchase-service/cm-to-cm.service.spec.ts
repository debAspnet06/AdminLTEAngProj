import { TestBed } from '@angular/core/testing';

import { CmToCmService } from './cm-to-cm.service';

describe('CmToCmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CmToCmService = TestBed.get(CmToCmService);
    expect(service).toBeTruthy();
  });
});
