import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recep-home',
  templateUrl: './recep-home.component.html',
  styleUrls: ['./recep-home.component.css']
})
export class RecepHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout()
  {
    localStorage.removeItem("Employee");
    this.router.navigate(["/home"]);
    }

  onHome() {
    this.router.navigate(["/changeemployeepassword"])
  }

  onAprrove() {


    this.router.navigate(["/approveappointment"])
  }

  onHomw() {

  }
}
