import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmailRequest} from "../../common/email-request";
import {EmailResponse} from "../../common/email-response";
import {HospitalService} from "../../services/hospital.service";
import {Router} from "@angular/router";
declare const $:any;
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private hospitalService:HospitalService,private router:Router) { }

  requestBody:EmailRequest;
  responsBody:EmailResponse;
  email:string;
  code:number;
  addForm:FormGroup;
  addForm1:FormGroup;
  submitted: boolean=false;
  submitted1: boolean=false;
  ngOnInit() {
    this.requestBody=new EmailRequest();
    this.responsBody=new EmailResponse();

    this.addForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
    });
    this.addForm1 = this.formBuilder.group({
      otp: ['', [Validators.required]]



    });

    $('#cardtwo').hide();


  }

  backtosignup() {
    this.router.navigate(["/login"])
  }

  OnSubmit() {

    this.submitted=true;
    if(this.addForm.invalid)
    {
      return;
    }


    this.requestBody.to=this.email;
    this.requestBody.from="kanaparthiphani0@gmail.com";
    this.requestBody.name="User"
    this.requestBody.subject="Password Change";

    this.hospitalService.searchEmail(this.email).subscribe(
      data=>{
          if(data=="stop")
          {
            $('#cardone').hide();
            $('#cardtwo').show();
            $('#otpinput').prop('readonly',false);
            var x = document.getElementById("snackbar2");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

            this.hospitalService.sendEmail(this.requestBody).subscribe(
              data=>
              {


                this.responsBody=data;
                localStorage.setItem("user", JSON.stringify(this.email));

                localStorage.setItem("EmailResponse", JSON.stringify(this.responsBody));


              }
            )

          }
          else{
            var x = document.getElementById("snackbar1");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);


          }
      }
    )
  }

  OnSubmitOtp() {
    this.submitted1=true;
    if(this.addForm1.invalid)
    {
      return;
    }

    this.responsBody=JSON.parse(localStorage.getItem("EmailResponse"));

    if(this.code==this.responsBody.code)
    {
      this.router.navigate(["/changepass"]);

    }
    else {
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

    }

  }
}
