import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../common/appointment';
import {Employee} from "../common/employee";
import {strict} from "assert";

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  private baseUrl = 'http://localhost:8083/api/appointments';
  private baseUrl1 = 'http://localhost:8085/api/medications';
  private baseUrl2 = 'http://localhost:8082/api/leaves';

  emp:Employee;
  fname:string;
  lname:string;
  constructor(private  http:HttpClient) { }

  displayAppointments(): Observable<any>
  {
    this.emp=JSON.parse(localStorage.getItem("Employee"));
    this.fname=this.emp.firstName;
    this.lname=this.emp.lastName;

    return this.http.get(this.baseUrl+"/doctor/"+this.fname+" "+this.lname+"/Yes");
  }

  getAppointment(id:number) : Observable<Appointment>
  {
    return this.http.get<Appointment>(`${this.baseUrl}/${id}`);
  }

  addMedication(medic : Object): Observable<any> {
    return this.http.post(`${this.baseUrl1}`, medic);
  }

  addLeave(leave : Object): Observable<any> {
    return this.http.post(`${this.baseUrl2}`, leave);
  }



}
