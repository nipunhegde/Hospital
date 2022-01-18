import { TestBed } from '@angular/core/testing';

import { PatientregistrationService } from './patientregistration.service';

describe('PatientregistrationService', () => {
  let service: PatientregistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientregistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
