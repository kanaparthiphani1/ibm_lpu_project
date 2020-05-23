import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/common/appointment';
import { Observable } from 'rxjs';
import { DoctorServiceService } from 'src/app/services/doctor-service.service';
import { MedicationComponent } from '../medication/medication.component';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.css']
})
export class ViewAppointmentsComponent implements OnInit {

  appointments : Observable<Appointment[]>;
  appoint : Appointment;
  constructor(private router : Router, private doctorService: DoctorServiceService) { }

  ngOnInit(): void {
    this.loadAppointList();
  }

  loadAppointList()
  {

    this.appointments= this.doctorService.displayAppointments();
    console.log(this.appointments);
  }
  onPatientList()
  {
  this.router.navigate(["/appointedList"])
  }

  onSelect(appointmentId : number)
  {
    this.doctorService.getAppointment(appointmentId).subscribe(
      data=>
      {
        console.log(data);

        localStorage.setItem("Appointment",JSON.stringify(data));


      }
    );
    this.router.navigate(["/medication"]);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/login"])
  }

  onHome() {
    this.router.navigate(["/doctorhome"])
  }


    onAccount() {
      this.router.navigate(["/changeemployeepassword"])
    }

}
