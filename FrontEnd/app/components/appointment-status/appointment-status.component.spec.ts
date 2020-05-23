import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentStatusComponent } from './appointment-status.component';

describe('AppointmentStatusComponent', () => {
  let component: AppointmentStatusComponent;
  let fixture: ComponentFixture<AppointmentStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
