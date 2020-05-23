import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from "../../common/user";
import { Admin } from 'src/app/common/admin';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {

  admin:Admin;
  email: string;
  password: string

  constructor(private router : Router ) {

   }

  ngOnInit(){
    this.admin = new Admin();
  }

  loginAdmin()
  {
    if(this.admin.email=="kanaparthiphani0@gmail.com" && this.admin.password=="Ardnin1")
    {
      this.router.navigate(["/admin"]);
    }
    else{
      alert("Enter valid details");
    }
  }
  onLoginAdmin()
  {
    this.router.navigate(["/loginadmin"]);
  }
  onLoginEmployee()
  {
    this.router.navigate(["/loginemployee"]);
  }
  onJobApply()
  {
    this.router.navigate(["/jobapply"]);
  }
  onLogin() {
    this.router.navigate(["/login"]);

  }

  onBack() {
    window.history.back();
  }
}
