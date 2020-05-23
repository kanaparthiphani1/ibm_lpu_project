import { Component, OnInit } from '@angular/core';
import {User} from "../../common/user";
import {Doctor} from "../../common/doctor";
import {Appointment} from "../../common/appointment";
import {HospitalService} from "../../services/hospital.service";
import {Router} from "@angular/router";

declare const $: any;
@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.css']
})
export class PatientAppointmentComponent implements OnInit {

  constructor(private hospitalService:HospitalService,private router:Router) { }

  user:User;
  doctor:Doctor;
  date:Date;
  description:string;
  doctorName:string;
  appointment:Appointment;
  ngOnInit() {
    this.appointment=new Appointment();

    this.user=JSON.parse(localStorage.getItem("User"));
    this.doctor=JSON.parse(localStorage.getItem("Doctor"));

    this.doctorName=this.doctor.firstName+" "+this.doctor.lastName;


  }


  onSubmit() {

    this.appointment.firstName=this.user.first_name;
    this.appointment.lastName=this.user.last_name;
    this.appointment.age=this.user.age;
    this.appointment.approved="In Progress";
    this.appointment.doctorName=this.doctorName;
    this.appointment.gender=this.user.gender
    this.appointment.email=this.user.email;
    this.appointment.mobileNumber=this.user.mobile_number;
    console.log(this.appointment.diabetic)
    if(this.appointment.diabetic!="false")
    {
      this.appointment.diabetic="1";
    }
    else {
      this.appointment.diabetic="0";
    }
    this.hospitalService.registerAppointment(this.appointment).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(["user/userhome"])
      }
    )
  }
}
