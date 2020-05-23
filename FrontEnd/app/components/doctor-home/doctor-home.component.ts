import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onPatientList()
  {
   this.router.navigate(["/appointedList"]) ;
  }

  onLeave()
  {
    this.router.navigate(["/leaveapply"]);
  }

  logout()
  {
    localStorage.removeItem("Employee");
    this.router.navigate(["/home"]);
  }

  onAccount() {
    this.router.navigate(["/changeemployeepassword"])
  }
}
