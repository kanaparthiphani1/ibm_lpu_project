import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HospitalService} from "../../services/hospital.service";
import {User} from "../../common/user";
import {Auth} from "../../common/auth";
import {EmailRequest} from "../../common/email-request";
import {EmailResponse} from "../../common/email-response";
import {log} from "util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User;
  emailRequest:EmailRequest;
  auth:Auth;
  emailResponse:EmailResponse;
  addForm: FormGroup;
  submitted: boolean = false;
  validate: number;
  passwordType: string = "password";
  passwordShow: boolean = false;
  confpass:string;
  pass:string;
  constructor(private formBuilder: FormBuilder,private router:Router,private hospitalService:HospitalService) { }

  ngOnInit(){
    localStorage.removeItem("User")
    localStorage.removeItem("username")
    localStorage.removeItem("token")
    this.emailRequest=new EmailRequest();
    this.user=new User();
    this.auth=new Auth();
    this.addForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern("[A-Z][A-Z a-z]{2,30}")]],
      lastName: ['', [Validators.required, Validators.pattern("[a-zA-Z]{3,20}")]],
      phone_Number: ['', [Validators.required, Validators.pattern("[6-9][0-9]{9}")]],
      sex:['',[Validators.required]],
      age:['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("[A-Z]{1}[a-z]{1}[a-zA-Z0-9]{4,8}")]]
    });




    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      console.log("signup")
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });


  }

  addUser() {
    this.submitted = true;

    if (this.addForm.invalid) {
      return;
    }

    this.hospitalService.searchEmail(this.user.email).subscribe(
      data=>{
        console.log(data);
        if(data=="continue")
        {

          localStorage.setItem("User", JSON.stringify(this.user));

          this.emailRequest.from = "kanaparthiphani0@gmail.com";
          this.emailRequest.to = this.user.email;
          this.emailRequest.name = this.user.first_name;
          this.emailRequest.subject = "Congratulations from Care Hospitals";
          var x = document.getElementById("snackbar1");
          x.className = "show";
          setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
          this.hospitalService.sendEmail(this.emailRequest).subscribe(
            data => {

              this.emailResponse = data;
              localStorage.setItem("EmailResponse", JSON.stringify(this.emailResponse));

              this.router.navigate(["/emailverify"]);
            }
          )
        }
        else if(data="stop"){
          var x = document.getElementById("snackbar");
           x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        }
      }
    )



  }
  //   this.hospitalService.createUser(this.user).subscribe(
  //    data=>{
  //      console.log(data);
  //      if(data==2)
  //      {
  //        var x = document.getElementById("snackbar1");
  //        x.className = "show";
  //        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  //
  //      }
  //      else{
  //      this.signUpHandler(data);}
  //    }
  //  )
  //
  // }
  //
  // signUpHandler(data) {
  //   this.validate = data;
  //   if (this.validate == 1) {
  //     //alert(`Hello, ${this.addForm.controls.firstName.value}. Your Account has been created successfully. You will be redirected to login screen`);
  //     var x = document.getElementById("snackbar");
  //     x.className = "show";
  //     setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  //     this.user.first_name=null
  //     this.user.last_name=null
  //     this.user.email=null
  //     this.user.age=null
  //     this.user.password=null
  //     this.user.gender=null
  //     this.user.mobile_number=null
  //     this.submitted=false;
  //     this.router.navigate(['/login']);
  //   }
  // }

  show() {
    if (this.passwordShow) {
      this.passwordShow = false;
      this.passwordType = "password";
    }
    else {
      this.passwordShow = true;
      this.passwordType = "text";
    }
  }


  signin()
  {
    this.hospitalService.generateToken(this.auth).subscribe(
      data=>{
        console.log(data);
        this.signInHandler(data);
      }
    )
  }

  signInHandler(data){
    if(data== "inavalid username/password")
    {
      var x = document.getElementById("snackbar2");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

    }
    else {

      localStorage.setItem("username",this.auth.username);
      localStorage.setItem("token",data);
      this.router.navigate(["/user"]);
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
}
