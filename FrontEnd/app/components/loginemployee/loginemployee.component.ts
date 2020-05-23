import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/common/employee';
import { Router } from '@angular/router';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';
import { Role } from 'src/app/enums/role.enum';

@Component({
  selector: 'app-loginemployee',
  templateUrl: './loginemployee.component.html',
  styleUrls: ['./loginemployee.component.css']
})
export class LoginemployeeComponent implements OnInit {

  employee : Employee;
  login: Employee = new Employee();
  userId: number;
  password: string;


  constructor(private router: Router,private employeeService : EmployeeserviceService) { }

  ngOnInit(){
    this.employee= new Employee();
  }

  getDetails()
  {
    this.employeeService.getEmployee(this.employee.userId,this.employee.password).subscribe(

      data=>{
          localStorage.setItem("Employee",JSON.stringify(data));

      }
    );
  }

  loginEmployee()
  {
    this.getDetails();
    this.login= JSON.parse(localStorage.getItem("Employee"));
if(this.login!=null)
{
    if(Role[this.login.role.roleName]== "0")
    {
      this.router.navigate(["/doctorhome"]);
    }
    else if (Role[this.login.role.roleName]== "1")
    {
        this.router.navigate(["/recephome"]);
    }
    else
    {
      alert("Invalid Details");
    }
  }
  else
  {
    alert("Invalid Details")
  }
  }
  onLoginAdmin()
  {
    this.router.navigate(["/loginadmin"]);
  }
  onLoginEmployee()
  {
    this.router.navigate(["/loginemployee"]);
  }
  onJobApply()
  {
    this.router.navigate(["/jobapply"]);
  }

  onLogin() {
    this.router.navigate(["/login"]);

  }

  onBack() {
    window.history.back()
  }
}
