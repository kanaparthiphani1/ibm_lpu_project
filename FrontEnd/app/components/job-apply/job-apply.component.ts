import { Component, OnInit } from '@angular/core';
import { RegisterEmployee } from 'src/app/common/register-employee';
import { RegisterEmployeeService } from 'src/app/services/register-employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.css']
})
export class JobApplyComponent implements OnInit {

  applied : RegisterEmployee = new RegisterEmployee();
  submitted= false;

  constructor(private registerService : RegisterEmployeeService, private router : Router) { }

  ngOnInit(): void {
  }

  onApply()
  {
    this.submitted = true;
    this.create();
  }

  create()
  {
    this.registerService.registerEmployee(this.applied).subscribe(data => console.log(data), error => console.log(error));
    this.applied = new RegisterEmployee();
    this.goBack();
  }
  goBack()
  {
    this.router.navigate(['/home']);
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

  onHome() {
    this.router.navigate(["/home"]);

  }
}
