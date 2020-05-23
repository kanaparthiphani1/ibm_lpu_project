import { Component, OnInit } from '@angular/core';
import {HospitalService} from "../../services/hospital.service";
import {Doctor} from "../../common/doctor";
import {ActivatedRoute, Router} from "@angular/router";
declare const $:any;
@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  constructor(private hospitalService:HospitalService,
              private route: ActivatedRoute,
              private router:Router) { }


  doctors:Doctor[];
  doctor:Doctor;
  id:number;
  ngOnInit(){
    this.route.paramMap.subscribe(() => {
      this.onStart();
    });

    $(document).ready(function () {
      $("#mydatatable").DataTable();
    })

  }

  onStart()
  {

    console.log("Hellooooo")
    const searchKey:boolean=this.route.snapshot.paramMap.has("id");
    if(searchKey){
      this.id=+this.route.snapshot.paramMap.get("id");
    }
    else{
      this.id=1;
    }

    this.hospitalService.viewdoctorsbySpec(this.id).subscribe(
      data=>{
        this.doctors=data;
        console.log(this.id)
        console.log(data)
      }
    )

  }

  onAppointment(email: string) {

    this.hospitalService.getEmpByEmail(email).subscribe(
      data=>
      {
        console.log("Again Component")
        this.doctor=data;
        localStorage.setItem("Doctor", JSON.stringify(this.doctor));
        console.log(data);
        this.router.navigate(["user/appoints"]);
      }
    )

  }
}
