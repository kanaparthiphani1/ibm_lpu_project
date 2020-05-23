import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Router} from "@angular/router";
declare const $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(){

      $(".loader-wrapper").fadeOut(3000);

   AOS.init(
      {
        delay: 100,
      }
    );
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
  onLogin() {
    this.router.navigate(["/login"]);

  }

  onDoctors() {
    this.router.navigate(["/user/doctor"])
  }

  OnContact() {
    this.router.navigate(["/contact-us"])
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
