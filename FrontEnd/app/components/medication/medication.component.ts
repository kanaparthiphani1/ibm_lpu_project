import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/common/appointment';
import { DoctorServiceService } from 'src/app/services/doctor-service.service';
import { Observable } from 'rxjs';
import { Medication } from 'src/app/common/medication';
import {Employee} from "../../common/employee";

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})
export class MedicationComponent implements OnInit {

  appointment :Appointment;

  emp:Employee;
  medication: Medication = new Medication();
  submitted= false;

  constructor(private router : Router,private doctorService : DoctorServiceService) { }

  ngOnInit() {

    this.emp=JSON.parse(localStorage.getItem("Employee"))
    this.medication.doctorId=this.emp.id;
    this.medication.doctorName=this.emp.firstName+this.emp.lastName;
    this.onFill();
  }

  onFill()
  {
    this.appointment=JSON.parse(localStorage.getItem("Appointment"));
    console.log(this.appointment.firstName);
   }
  onSubmit()
  {
    this.create();

  }

  create()
  {
    this.medication.patientEmail= this.appointment.email;
    this.medication.patientGender= this.appointment.gender;
    this.medication.patientName= this.appointment.firstName+ this.appointment.lastName;
    this.doctorService.addMedication(this.medication).subscribe(data => console.log(data), error => console.log(error));

   this.medication= new Medication();

   this.router.navigate(["/doctorhome"]);

  }

  onHome() {
    this.router.navigate(["/doctorhome"]);


  }

  onPatientList() {
    this.router.navigate(["/appointedList"]);

  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/home"]);

  }
}
