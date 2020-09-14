/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HouseingService } from './houseing.service';

describe('Service: Houseing', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HouseingService]
    });
  });

  it('should ...', inject([HouseingService], (service: HouseingService) => {
    expect(service).toBeTruthy();
  }));
});
