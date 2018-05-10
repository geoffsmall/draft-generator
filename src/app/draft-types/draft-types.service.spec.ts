import { TestBed, inject } from '@angular/core/testing';

import { DraftTypesService } from './draft-types.service';

describe('DraftTypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DraftTypesService]
    });
  });

  it('should be created', inject([DraftTypesService], (service: DraftTypesService) => {
    expect(service).toBeTruthy();
  }));
});
