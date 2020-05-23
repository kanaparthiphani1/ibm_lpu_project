import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {User} from "../common/user";
import {Observable} from "rxjs";
import {PasswordChange} from "../common/password-change";
import {EmailRequest} from "../common/email-request";
import {EmailResponse} from "../common/email-response";
import {Specialization} from "../common/specialization";
import {Doctor} from "../common/doctor";
import {Appointment} from "../common/appointment";

@Injectable({
  providedIn: 'root'
})
export class HospitalService {


  adminUrl:string="http://localhost:8081/api/";
  userUrl:string="http://localhost:8088/";

  constructor(private http:HttpClient) { }

  appointmentUrl:string="http://localhost:8083/api/";

  createUser(user:User)
  {
    console.log("reached serfvice");
    return this.http.post("http://localhost:8088/createusers",user);
  }

  generateToken(request) {
    return this.http.post<string>("http://localhost:8088/authenticate", request, {  responseType: 'text' as 'json' });
  }

  getByEmail(email:string):Observable<User>
  {
    console.log(email);
    let tokenStr="Bearer "+localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get<User>("http://localhost:8088/useremail/"+email, {headers});
  }

  updateUser(user:User):Observable<User>
  {let tokenStr="Bearer "+localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.put<User>("http://localhost:8088/updateuser",user, {headers});
  }

  updatePassword(passwordChange:PasswordChange):Observable<string>
  {let tokenStr="Bearer "+localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    console.log("Came Here")
    return this.http.put<string>("http://localhost:8088/updatepassword",passwordChange, {headers,responseType:'text' as 'json'});
  }

  sendEmail(emailRequest:EmailRequest):Observable<EmailResponse>
  {
    return this.http.post<EmailResponse>("http://localhost:8088/sendingEmail",emailRequest);
  }

  searchEmail(email:string):Observable<string>
  {
    console.log("HIOIIII")
    return this.http.get<string>("http://localhost:8088/search/"+email,{responseType:'text' as 'json'});
  }
  updatePassword1(passwordChange:PasswordChange):Observable<string>
  {
    console.log("Came Here")
    return this.http.put<string>("http://localhost:8088/updatepass",passwordChange, {responseType:'text' as 'json'});
  }

  viewdoctorsbySpec(id:number)
  {
    return this.http.get<Doctor[]>(this.adminUrl+"employeedto/spec/"+id);
  }

  getspec()
  {
    console.log("BYEEEEEE")
    return this.http.get<Specialization[]>(this.adminUrl+"specs");
  }

  getEmpByEmail(email:string)
  {
    console.log("Here Service")
    return this.http.get<Doctor>(this.adminUrl+"employeedtoemail/"+email);
  }
  registerAppointment(appointment:Appointment)
  {
    return this.http.post<Appointment>(this.appointmentUrl+"appointments",appointment);
  }
  getappointsbyEmail(email:string)
  {
    return this.http.get<Appointment[]>(this.appointmentUrl+"appoint/"+email);
  }

  Loggedin()
  {
    return !!localStorage.getItem("token");
  }

  sendEmail1(emailRequest:EmailRequest):Observable<EmailResponse>
  {
    console.log("HIIIIIII")
    return this.http.post<EmailResponse>("http://localhost:8088/sendingEmail1",emailRequest);
  }

  countEmp():Observable<number>
  {
   return  this.http.get<number>(this.adminUrl+"employee/count");
  }


  countUsers():Observable<number>
  {
    console.log("HEllooo")
    return  this.http.get<number>("http://localhost:8088/user-count");

  }

  countDoctors():Observable<number>
  {

   return  this.http.get<number>(this.adminUrl+"doctor/count");

  }
}
