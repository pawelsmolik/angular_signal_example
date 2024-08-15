/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccountEntityService } from './AccountEntityService.service';

describe('Service: AccountEntityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountEntityService]
    });
  });

  it('should ...', inject([AccountEntityService], (service: AccountEntityService) => {
    expect(service).toBeTruthy();
  }));
});
