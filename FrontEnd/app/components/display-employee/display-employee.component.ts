import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/common/employee';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';
declare const $:any;
@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  employees :Observable<Employee[]>;

  constructor(private router : Router, private employeeService: EmployeeserviceService ) { }

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees()
  {
    console.log(this.employees);
    this.employees = this.employeeService.displayEmployee();
  }


  onlogout() {
    localStorage.clear();
    this.router.navigate(["/home"]);
  }
}
