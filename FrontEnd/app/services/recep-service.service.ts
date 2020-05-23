import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../common/appointment';

@Injectable({
  providedIn: 'root'
})
export class RecepServiceService {

  private baseUrl = 'http://localhost:8083/api/appointments';
  private baseUrl1 = 'http://localhost:8085/api/medications';

  constructor(private http : HttpClient) { }


  makeAppointment(appoint : Object): Observable<any> {
    return this.http.post(`${this.baseUrl}`, appoint);
  }

  displayAppointments(): Observable<any>
  {
    return this.http.get(`${this.baseUrl}`);
  }

  displayInProgress(): Observable<Appointment[]>
  {
    return this.http.get<Appointment[]>(`${this.baseUrl}/approved/In Progress`);
  }


  displayApproved(): Observable<Appointment[]>
  {
    return this.http.get<Appointment[]>(`${this.baseUrl}/approved/Yes`);
  }
  displayRejected(): Observable<Appointment[]>
  {
    return this.http.get<Appointment[]>(`${this.baseUrl}/approved/No`);
  }


  getAppointment(id:number) : Observable<Appointment>
  {
    return this.http.get<Appointment>(`${this.baseUrl}/${id}`);
  }

approveAppointment(id:number): Observable<any>
{
  return this.http.get(`${this.baseUrl}/approve/${id}`);
}

rejectAppointment(id : number): Observable<any>
{
  return this.http.get(`${this.baseUrl}/reject/${id}`);
}

getMedication(patientEmail: string): Observable<any>
{
  return this.http.get(`${this.baseUrl1}/email/${patientEmail}`);
}


}
