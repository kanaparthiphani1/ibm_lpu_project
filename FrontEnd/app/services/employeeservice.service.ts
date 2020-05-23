import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../common/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  private baseUrl = 'http://localhost:8081/api';
  constructor(private http:HttpClient) { }

  displayEmployee(): Observable<any> 
  {
    return this.http.get(`${this.baseUrl}/employees`);
  }
  
  sendEmail(email : Object): Observable<any> {
    return this.http.post(`${this.baseUrl}/sendingEmail`, email);
  }


  createEmployee(employee : Object): Observable<any> {
    return this.http.post(`${this.baseUrl}/employees`, employee);
  }

  getEmployee(userId : number , password: String): Observable<Employee> 
  {
    return this.http.get<Employee>(`${this.baseUrl}/employees/login/${userId}/${password}`);
  }
  
}
