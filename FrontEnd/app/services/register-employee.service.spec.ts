import { TestBed } from '@angular/core/testing';

import { RegisterEmployeeService } from './register-employee.service';

describe('RegisterEmployeeService', () => {
  let service: RegisterEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
