import { Component, OnInit } from '@angular/core';
import { Medication } from 'src/app/common/medication';
import { Router } from '@angular/router';
import { RecepServiceService } from 'src/app/services/recep-service.service';
declare const $:any

@Component({
  selector: 'app-medication-report',
  templateUrl: './medication-report.component.html',
  styleUrls: ['./medication-report.component.css']
})
export class MedicationReportComponent implements OnInit {

  email: string;
  medication: Medication = new Medication();

  constructor(private router: Router, private recepService: RecepServiceService) {
  }

  ngOnInit(): void {
    $("#report").hide();





  }

  loadReport() {
    console.log(this.email);
    $("#report").show();
    this.recepService.getMedication(this.email).subscribe(
      data => {
        this.medication = data;

      }
    );

  }


  logout() {
    localStorage.removeItem("Employee");
    this.router.navigate(["/home"]);
  }

  onHome() {
    this.router.navigate(["/changeemployeepassword"])
  }

  onAprrove() {


    this.router.navigate(["/approveappointment"])
  }

  onHomw() {



  }

  onHome1() {
    this.router.navigate(["/recephome"])
  }
}
