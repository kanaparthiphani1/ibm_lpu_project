import { Component, OnInit } from '@angular/core';
import {User} from "../../common/user";
import {HospitalService} from "../../services/hospital.service";
import {FormBuilder, FormGroup, FormsModule, Validators} from "@angular/forms";
import {PasswordChange} from "../../common/password-change";

declare const $: any;
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  addForm: FormGroup;
  addForm1:FormGroup;
  user:User;
  user1:User;
  submitted:boolean;
  passwordChange:PasswordChange;
  constructor(private hospitalService:HospitalService,private formBuilder:FormBuilder) { }

  ngOnInit(){

    this.submitted=false;
    this.addForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required, Validators.pattern("[a-zA-Z]{3,20}")]],
      mobile_number: ['', [Validators.required, Validators.pattern("[6-9][0-9]{9}")]],
      // dob:['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      age:['',]
    });


    this.addForm1 =this.formBuilder.group({

      new_password: ['', [Validators.required, Validators.pattern("[A-Z]{1}[a-z]{1}[a-zA-Z0-9]{4,8}")]],
      old_password: ['', [Validators.required]],
      re_password: ['', [Validators.required]]
    });


    this.hospitalService.getByEmail(localStorage.getItem("username")).subscribe(

      data=>{
        console.log(data);
        localStorage.setItem("User",JSON.stringify(data));
        this.user=JSON.parse(localStorage.getItem("User"));
        console.log(this.user.first_name)
      }
    )

    this.user1=new User();
    console.log(this.user)
    var mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }

  onEdit() {

    this.user=null;
    $("#changeName1").click(function () {
      $('.inputchange1').prop('readonly',false);
    });
  }

  onPhoto() {
    var readURL = function(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          $('.profile-pic').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
      }
    }


    $(".file-upload").on('change', function(){
      readURL(this);
    });

    $(".upload-button").on('click', function() {
      $(".file-upload").click();
    });
  }

  onUpdate() {

    console.log("HOOOO")
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    this.submitted=false;
    console.log(this.addForm.value)
    console.log(this.user)
    this.hospitalService.updateUser(this.addForm.value).subscribe(
      data=>
      {
        this.user=data;
      }
    )
  }

  onPasswordChange() {

    this.submitted=true;
    if (this.addForm1.invalid) {
      return;
    }

    this.passwordChange=this.addForm1.value;



    if(this.passwordChange.new_password == this.passwordChange.re_password) {
      this.passwordChange.email=localStorage.getItem("username")
      this.hospitalService.updatePassword(this.passwordChange).subscribe(
        data => {
          console.log(data)
          if(data=="Success")
          {
            this.addForm1.reset()
            var x = document.getElementById("snackbar");
            x.className = "show";

            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

          }
          else {
            this.addForm1.reset()
            var x = document.getElementById("snackbar1");
            x.className = "show";

            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

          }
        }
      )
    }
    else {
      this.addForm1.reset();
      var x = document.getElementById("snackbar2");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

    }

  }
}
