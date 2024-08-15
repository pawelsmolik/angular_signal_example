/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EntityBaseService } from './EntityBase.service';

describe('Service: EntityBase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntityBaseService]
    });
  });

  it('should ...', inject([EntityBaseService], (service: EntityBaseService) => {
    expect(service).toBeTruthy();
  }));
});
