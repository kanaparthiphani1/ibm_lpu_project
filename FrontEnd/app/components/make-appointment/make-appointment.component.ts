import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/common/appointment';
import { Router } from '@angular/router';
import { RecepServiceService } from 'src/app/services/recep-service.service';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.css']
})
export class MakeAppointmentComponent implements OnInit {

  appointment : Appointment = new Appointment();
  submitted= false;

  constructor(private router : Router ,private recepService : RecepServiceService) { }

  ngOnInit(): void {
  }

  onApply()
  {
    this.submitted = true;
    this.create();
  }

  create()
  {
    this.recepService.makeAppointment(this.appointment).subscribe(data => console.log(data), error => console.log(error));
    this.appointment = new Appointment();
    this.goHome();
  }
  goHome()
  {
    this.router.navigate(['/recephome']);
  }

  
}
