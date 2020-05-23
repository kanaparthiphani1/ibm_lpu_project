import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedEmployeeComponent } from './applied-employee.component';

describe('AppliedEmployeeComponent', () => {
  let component: AppliedEmployeeComponent;
  let fixture: ComponentFixture<AppliedEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
