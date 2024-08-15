/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ClientEntityService } from './ClientEntityService.service';

describe('Service: Counter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientEntityService]
    });
  });

  it('should ...', inject([ClientEntityService], (service: ClientEntityService) => {
    expect(service).toBeTruthy();
  }));
});
