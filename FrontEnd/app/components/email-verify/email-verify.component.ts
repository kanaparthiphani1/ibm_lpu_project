import { Component, OnInit } from '@angular/core';
import {HospitalService} from "../../services/hospital.service";
import {User} from "../../common/user";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmailResponse} from "../../common/email-response";

@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.css']
})
export class EmailVerifyComponent implements OnInit {

  constructor(private hospitalService:HospitalService,private router:Router,private formBuilder:FormBuilder) { }
  validate: number;
  user:User;
  code:number;
  emailResponse:EmailResponse;
  addForm: FormGroup;
  submitted: boolean = false;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      otp: ['', [Validators.required]]



    });

    this.emailResponse=JSON.parse(localStorage.getItem("EmailResponse"));
    this.user=JSON.parse(localStorage.getItem("User"));

  }


  signUpHandler(data) {
    this.validate = data;
    if (this.validate == 1) {
      //alert(`Hello, ${this.addForm.controls.firstName.value}. Your Account has been created successfully. You will be redirected to login screen`);

      this.router.navigate(['/login']);
    }
  }

  OnSubmit() {
    this.submitted=true;
    if (this.addForm.invalid) {
      return;
    }

    if(this.code==this.emailResponse.code)
    {
      this.hospitalService.createUser(this.user).subscribe(
        data=>{
          console.log(data);
          if(data==2)
          {
            var x = document.getElementById("snackbar1");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

          }
          else{
            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 0);

            this.signUpHandler(data);}
        }
      )
    }
    else {
      var x = document.getElementById("snackbar1");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }

  }

  backtosignup() {
    this.router.navigate(["/login"])
  }
}
