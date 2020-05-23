import { Component, OnInit, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterEmployee } from 'src/app/common/register-employee';
import { Router } from '@angular/router';
import { RegisterEmployeeService } from 'src/app/services/register-employee.service';
import { Employee } from 'src/app/common/employee';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';
import { RoleEntity } from 'src/app/common/role-entity';
import { Role } from 'src/app/enums/role.enum';
import { SpecializationEntity } from 'src/app/common/specialization-entity';
import { Specialization } from 'src/app/enums/specialization.enum';
import { EmployeeMail } from 'src/app/common/employee-mail';

@Component({
  selector: 'app-applied-employee',
  templateUrl: './applied-employee.component.html',
  styleUrls: ['./applied-employee.component.css']
})
export class AppliedEmployeeComponent implements OnInit {

  employee1:Employee=new Employee();
  applies: Observable<RegisterEmployee[]>;
  register: Observable<RegisterEmployee>;
  extra: RegisterEmployee = new RegisterEmployee();
 employee: Employee= new Employee();

 email:EmployeeMail= new EmployeeMail();
 role: RoleEntity= new RoleEntity();
 specialization : SpecializationEntity = new SpecializationEntity();

 x :string;
 y:string;
  constructor(private router : Router,private registerService : RegisterEmployeeService
    ,private employeeService :EmployeeserviceService) { }

  ngOnInit(): void {
    this.loadAppliesData();

  }

  loadAppliesData()
  {
      this.applies = this.registerService.displayRegisterEmployee();
  }

  rejectEmployee(id: number) {
    this.registerService.rejectEmployee(id)
      .subscribe(
        data => {
          this.loadAppliesData();
        },
        error => console.log(error));
  }

  approveEmployee(id:number)
  {
    this.registerService.getEmployee(id).subscribe(
     data=>
     {
       this.extra= data;

       this.employee.firstName= this.extra.firstName;
    this.employee.lastName= this.extra.lastName;
    this.employee.age= this.extra.age;
    this.employee.email= this.extra.email;
    this.employee.gender= this.extra.gender;
    this.employee.phone= this.extra.phone;
   this.x =Role[this.extra.role];
    if(this.x== "1")
    {
      this.role.roleId=1;
      this.role.roleName=Role.DOCTOR;
    }
    else
    {
      this.role.roleId= 2;
      this.role.roleName= Role.RECEPTIONIST;
    }

    this.employee.role=this.role;
   this.y= Specialization[this.extra.specialization];

    if(this.y =="5")
      {
        console.log("HELLO")
          this.specialization.specId=6;
          this.specialization.specName=Specialization.RECEPTIONIST;

      }
      else if (this.y =="0")
      {
          this.specialization.specId=1;
          this.specialization.specName=Specialization.DENTIST;
        }

      else if(this.y =="1")
      {
          this.specialization.specId=2;
          this.specialization.specName=Specialization.PHYSICIAN;
      }
      else if(this.y =="2")
      {
          this.specialization.specId=3;
          this.specialization.specName=Specialization.CARDIOLOGIST;
      }
      else if(this.y =="3")
      {
          this.specialization.specId=4;
          this.specialization.specName=Specialization.DERMATOLOGIST;
      }
      else if(this.y =="4")
      {
           this.specialization.specId=5;
           this.specialization.specName=Specialization.ENTSPECIALIST;
      }

      this.employee.specialization= this.specialization;
    console.log(this.employee);



    this.email.name=this.employee.firstName+this.employee.lastName;
    this.email.userId= this.employee.userId;
    this.email.password= this.employee.password;
    this.email.from="kanaparthiphani0@gmail.com";
    this.email.to=this.employee.email;
    this.email.subject="Care Hospital -> Job Status";
    this.employeeService.sendEmail(this.email);

      this.employeeService.createEmployee(this.employee).subscribe(data =>
      {
        this.employee1=data
      this.sendEmail();}, error => console.log(error));
      this.registerService.rejectEmployee(this.extra.id).subscribe(
        data => {
          this.loadAppliesData();
        },
        error => console.log(error));
    }

    );



  }

  onlogout() {
    localStorage.clear();
    this.router.navigate(["/home"]);
  }

  private sendEmail() {
    this.email.name=this.employee1.firstName+this.employee1.lastName;
    this.email.userId= this.employee1.userId;
    this.email.password= this.employee1.password;
    this.email.from="kanaparthiphani0@gmail.com";
    this.email.to=this.employee1.email;
    this.email.subject="Care Hospital -> Job Status";
    this.employeeService.sendEmail(this.email).subscribe(data=>
    {

    })
  }
}
