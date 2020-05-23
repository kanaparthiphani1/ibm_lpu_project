import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {User} from "../../common/user";
import {HospitalService} from "../../services/hospital.service";
import {Router} from "@angular/router";
declare const $:any
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  user: User;

  flag:number;
  constructor(private hospitalService:HospitalService,private router:Router) {
  }

  ngOnInit() {




      $("#changeName").click(function () {
        $('.inputchange').prop('readonly',false);
      });

      $("#changeName2").click(function () {
        $('.inputchange2').prop('readonly',false);
      });




    this.hospitalService.getByEmail(localStorage.getItem("username")).subscribe(

      data=>{
        console.log(data);
        localStorage.setItem("User",JSON.stringify(data));
        this.user=JSON.parse(localStorage.getItem("User"));
        console.log(this.user)
      }
    )

    AOS.init(
      {
        delay: 100,
      }
    );


  }

  onDoctorView() {

    this.router.navigate(["user/doctor"])
  }
}
