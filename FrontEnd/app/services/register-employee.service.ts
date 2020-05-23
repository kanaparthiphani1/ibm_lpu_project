import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterEmployee } from '../common/register-employee';

@Injectable({
  providedIn: 'root'
})
export class RegisterEmployeeService {

  private baseUrl = 'http://localhost:8081/api/register/employees';
  constructor(private http:HttpClient) { }

  displayRegisterEmployee(): Observable<any> 
  {
    return this.http.get(`${this.baseUrl}`);
  }

  registerEmployee(applicant : Object): Observable<any> {
    return this.http.post(`${this.baseUrl}`, applicant);
  }

  rejectEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployee(id:number) : Observable<RegisterEmployee>
  {
    return this.http.get<RegisterEmployee>(`${this.baseUrl}/${id}`);
  }
  
}
