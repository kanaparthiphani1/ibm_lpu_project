import { Component, OnInit } from '@angular/core';
import {HospitalService} from "../../services/hospital.service";
import {daLocale} from "ngx-bootstrap/chronos";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private hospitalService:HospitalService,private router:Router) { }

  docnum:number;
  usernum:number;
  empnum:number;
  ngOnInit() {
    this.hospitalService.countDoctors().subscribe(
      data=>{
        this.docnum=data;
      }
    );
    this.hospitalService.countEmp().subscribe(
      data=>{
        this.empnum=data;
      }
    );
    this.hospitalService.countUsers().subscribe(
      data=>{
        console.log("hiii")
        console.log(data)
        this.usernum=data;
      }
    );

  }


  onlogout() {
    localStorage.clear();
    this.router.navigate(["/home"]);
  }
}
