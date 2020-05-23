import { Component, OnInit } from '@angular/core';
import {HospitalService} from "../../services/hospital.service";
import {Appointment} from "../../common/appointment";
import {User} from "../../common/user";

@Component({
  selector: 'app-appointment-status',
  templateUrl: './appointment-status.component.html',
  styleUrls: ['./appointment-status.component.css']
})
export class AppointmentStatusComponent implements OnInit {

  constructor(private hospitalService:HospitalService) { }

  user:User;

  appointstatus:Appointment[];
  ngOnInit() {
    this.user=JSON.parse(localStorage.getItem("User"));
    this.hospitalService.getappointsbyEmail(this.user.email).subscribe(
      data=>{
        this.appointstatus=data;
      }

    )

  }

}
