import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedAppointmentComponent } from './approved-appointment.component';

describe('ApprovedAppointmentComponent', () => {
  let component: ApprovedAppointmentComponent;
  let fixture: ComponentFixture<ApprovedAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
