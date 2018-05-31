import { TestBed, inject } from '@angular/core/testing';

import { ElementsService } from './element-service.service';

describe('ElementServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElementsService]
    });
  });

  it('should be created', inject([ElementsService], (service: ElementsService) => {
    expect(service).toBeTruthy();
  }));
});
