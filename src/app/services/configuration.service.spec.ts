import {TestBed} from '@angular/core/testing';

import {ConfigurationService} from './configuration.service';
import {HttpClientModule} from "@angular/common/http";

describe('ConfigurationService', () => {
  let service: ConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(ConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
