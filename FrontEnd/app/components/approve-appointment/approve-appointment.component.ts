import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/common/appointment';
import {ActivatedRoute, Router} from '@angular/router';
import { RecepServiceService } from 'src/app/services/recep-service.service';
declare const $:any
@Component({
  selector: 'app-approve-appointment',
  templateUrl: './approve-appointment.component.html',
  styleUrls: ['./approve-appointment.component.css']
})
export class ApproveAppointmentComponent implements OnInit {

  appoints : Appointment[];
  appoint : Observable<Appointment>;
  constructor(private router : Router,private recepService : RecepServiceService,private route:ActivatedRoute) { }

  ngOnInit() {

  }



  loadAppoints()
  {
    console.log("hiiiii")
     this.recepService.displayInProgress().subscribe(
       data=>{this.appoints=data}
     );


  }

  loadApproved()
  {
    console.log("hiiiii1")
    this.recepService.displayApproved().subscribe(data=>{this.appoints=data});
  }
  loadRejected()

  {
    console.log("hiiiii2")
    this.recepService.displayRejected().subscribe(data=>{this.appoints=data});
  }

  approveAppoint(id: number){
    console.log(id);
    this.recepService.approveAppointment(id).subscribe(data=>{console.log(data)});
   // this.loadAppoints();


    window.location.reload();

  }

  rejectAppoint(id:number)
  {
    console.log(id);
    this.recepService.rejectAppointment(id).subscribe(data=>{console.log(data)});
    //this.loadAppoints();
    this.router.navigate(["/approveappointment"])
    window.location.reload();

  }

  onHome() {
    this.router.navigate(["/recephome"])
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(["/home"]);
  }

  onChange() {
    this.router.navigate(["/changeemployeepassword"]);

  }
}
