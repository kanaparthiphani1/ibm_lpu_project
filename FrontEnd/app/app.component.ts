import {Component, OnInit} from '@angular/core';

import 'aos/dist/aos.css';
import {Router} from "@angular/router";
import {HospitalService} from "./services/hospital.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Hospital-App';

  constructor(private router:Router,private hospitalService:HospitalService) {
  }

  activate=this.hospitalService.Loggedin();

  ngOnInit() {



  }

  onContact() {
    this.router.navigate(["/contact-us"])
  }

  onTeam() {
    this.router.navigate(["/team"])

  }
}
