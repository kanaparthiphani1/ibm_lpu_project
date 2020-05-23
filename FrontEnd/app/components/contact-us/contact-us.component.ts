import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HospitalService} from "../../services/hospital.service";
import {User} from "../../common/user";
import {EmailRequest} from "../../common/email-request";
declare const $:any;
declare var VanillaTilt;
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  addForm: FormGroup;
submitted:boolean;
  constructor(private formBuilder: FormBuilder,private router:Router,private hospitalService:HospitalService) { }

  emailReq:EmailRequest;
  user:User
  email:string;
  name:string;
  desc:string;
  ngOnInit() {
    this.submitted=false;
    this.addForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern("[A-Z][A-Z a-z]{2,30}")]],
      lastName: ['', [Validators.required]],

      email: ['', [Validators.required, Validators.email]],
    });

    VanillaTilt.init(document.querySelector(".tilt-image"), { max: 25, speed: 400 });

    VanillaTilt.init(document.querySelectorAll(".tilt-image"));

    this.emailReq=new EmailRequest();
    if(this.hospitalService.Loggedin())
    {
      this.user=JSON.parse(localStorage.getItem("User"));

      this.emailReq.name=this.user.first_name;
      this.emailReq.from=this.user.email;
    }






  }
  onCLickHome() {
    this.router.navigate(["/home"]);
  }

  OnForget() {
    this.router.navigate(["/forget"]);
  }
  onLogin() {
    this.router.navigate(["/login"]);

  }


  onclick() {
    this.submitted=true;
    if(this.addForm.invalid)
    {
      return;
    }

    console.log(this.name)
    console.log(this.email)
    console.log(this.desc)


    this.emailReq.to="kanaparthiphani0@gmail.com";

    this.emailReq.subject=this.desc;

    console.log(this.emailReq.from)
    console.log(this.emailReq.to)
    console.log(this.emailReq.name)
    console.log(this.emailReq.subject)

    this.hospitalService.sendEmail1(this.emailReq).subscribe(
      data=>
      {
        if(data!=null){
          console.log("sent");
        }
      }
    )


  }

  onBack() {
    window.history.back();
  }
}
