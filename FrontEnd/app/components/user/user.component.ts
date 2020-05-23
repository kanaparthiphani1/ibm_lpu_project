import { Component, OnInit } from '@angular/core';

import {HospitalService} from "../../services/hospital.service";
import {User} from "../../common/user";
import {Router} from "@angular/router";
import {compareSegments} from "@angular/compiler-cli/ngcc/src/sourcemaps/segment_marker";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private hospitalService:HospitalService,
              private router:Router) { }

  email:string=null;
  user:User
  ngOnInit(){



    this.hospitalService.getByEmail(localStorage.getItem("username")).subscribe(

      data=>{
        console.log(data);
        localStorage.setItem("User",JSON.stringify(data));
        this.user=JSON.parse(localStorage.getItem("User"));
        console.log(this.user)
      }
    )



  }

  onLogut() {
    localStorage.removeItem("User")
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    this.router.navigate(["/home"])
  }
}
