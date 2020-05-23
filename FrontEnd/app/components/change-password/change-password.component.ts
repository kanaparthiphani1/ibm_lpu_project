import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmailResponse} from "../../common/email-response";
import {PasswordChange} from "../../common/password-change";
import {HospitalService} from "../../services/hospital.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {


  passchange:PasswordChange;
  submitted:boolean;
  new_pass:string;
  old_pass:string;
  email:string;
  constructor(private formBuilder:FormBuilder,private hospitalService:HospitalService,private router:Router) { }


  addForm1:FormGroup
  ngOnInit(){

    this.passchange=new PasswordChange();
    this.addForm1 =this.formBuilder.group({

      new_password: ['', [Validators.required, Validators.pattern("[A-Z]{1}[a-z]{1}[a-zA-Z0-9]{4,8}")]],
      re_password: ['', [Validators.required]]
    });
  }

  onPasswordChange() {

    if(this.old_pass==this.new_pass)
    {

      this.passchange.email=localStorage.getItem("user");
      console.log(this.passchange.email);
      this.passchange.re_password="xx";
      this.passchange.new_password=this.new_pass;
      this.passchange.old_password=this.old_pass;
      this.hospitalService.updatePassword1(this.passchange).subscribe(
        data=>{
          this.router.navigate(["/login"])
        }

      )



    }
    else {


      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

    }
  }
}
