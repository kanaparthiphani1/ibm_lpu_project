import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/common/employee';
import { Router } from '@angular/router';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';

@Component({
  selector: 'app-change-employee-password',
  templateUrl: './change-employee-password.component.html',
  styleUrls: ['./change-employee-password.component.css']
})
export class ChangeEmployeePasswordComponent implements OnInit {

  employee:Employee;
  oldpassword:string;
  password:string;
  repassword:string;
  constructor(private router : Router, private employeeService: EmployeeserviceService) { }

  ngOnInit() {
    this.employee= JSON.parse(localStorage.getItem("Employee"));
  }

  onChange()
  {
    if(this.oldpassword!= this.employee.password)
    {
      alert("Old Password Is Wrong");
    }
    else if(this.password != this.repassword)
    {
      alert("New Password And Confirm Password are not Equal");
    }
    else
    {
      this.employee.password= this.password;
      this.employeeService.createEmployee(this.employee).subscribe(data=>{console.log(data)});
    }
  }

  onPatientList() {

  }

  onAccount() {

  }

  logout() {

  }

  onBAck() {
    window.history.back();
  }
}
