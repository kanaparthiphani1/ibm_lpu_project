import { Component, OnInit } from '@angular/core';
import {HospitalService} from "../../services/hospital.service";
import {Specialization} from "../../common/specialization";
import {Router} from "@angular/router";

@Component({
  selector: 'app-doctor-view',
  templateUrl: './doctor-view.component.html',
  styleUrls: ['./doctor-view.component.css']
})
export class DoctorViewComponent implements OnInit {

  spec:Specialization[];
  id:number;
  constructor(private hospitalService:HospitalService,private router:Router) { }

  ngOnInit(){
    this.hospitalService.getspec().subscribe(
      data=>{
        console.log(data)
        this.spec=data;
      }
    )

  }


}
