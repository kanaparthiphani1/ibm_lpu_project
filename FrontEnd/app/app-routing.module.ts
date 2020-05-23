import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {UserComponent} from "./components/user/user.component";
import {UserHomeComponent} from "./components/user-home/user-home.component";
import {UserProfileComponent} from "./components/user-profile/user-profile.component";
import {EmailVerifyComponent} from "./components/email-verify/email-verify.component";
import {ForgetPasswordComponent} from "./components/forget-password/forget-password.component";
import {ChangePasswordComponent} from "./components/change-password/change-password.component";
import {DoctorViewComponent} from "./components/doctor-view/doctor-view.component";
import {DoctorListComponent} from "./components/doctor-list/doctor-list.component";
import {PatientAppointmentComponent} from "./components/patient-appointment/patient-appointment.component";
import {AppointmentStatusComponent} from "./components/appointment-status/appointment-status.component";
import {ContactUsComponent} from "./components/contact-us/contact-us.component";
import {AuthGuard} from "./auth.guard";
import {OurTeamComponent} from "./components/our-team/our-team.component";
import {AdminComponent} from "./components/admin/admin.component";
import { LoginadminComponent } from './components/loginadmin/loginadmin.component';
import { LoginemployeeComponent } from './components/loginemployee/loginemployee.component';
import { DisplayEmployeeComponent } from './components/display-employee/display-employee.component';
import { AppliedEmployeeComponent } from './components/applied-employee/applied-employee.component';
import { JobApplyComponent } from './components/job-apply/job-apply.component';
import { DoctorHomeComponent } from './components/doctor-home/doctor-home.component';
import { ViewAppointmentsComponent } from './components/view-appointments/view-appointments.component';
import { RecepHomeComponent } from './components/recep-home/recep-home.component';
import { MedicationComponent } from './components/medication/medication.component';
import { ApproveAppointmentComponent } from './components/approve-appointment/approve-appointment.component';
import { MakeAppointmentComponent } from './components/make-appointment/make-appointment.component';
import { MedicationReportComponent } from './components/medication-report/medication-report.component';
import {ChangeEmployeePasswordComponent} from "./components/change-employee-password/change-employee-password.component";




const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"login" ,component:LoginComponent},
  {path:"home", component:HomeComponent},
  {path:"emailverify",component:EmailVerifyComponent},
  {path:"forget",component:ForgetPasswordComponent},

  {path:"team",component:OurTeamComponent},
  {path:"changepass",component:ChangePasswordComponent},
  {path:"contact-us",component:ContactUsComponent},
  {path:"user",component:UserComponent,canActivate:[AuthGuard], children:[
      {path:"" ,component:UserHomeComponent,canActivate:[AuthGuard]},
      {path:"userhome",component:UserHomeComponent,canActivate:[AuthGuard]},
      {path:"userprofile",component:UserProfileComponent,canActivate:[AuthGuard]},
      {path:"doctor",component:DoctorViewComponent,canActivate:[AuthGuard], children:[
          {path:"",component:DoctorListComponent,canActivate:[AuthGuard]},
          {path:"doctors/:id",component:DoctorListComponent,canActivate:[AuthGuard]},


        ]},
      {path:"appoints",component:PatientAppointmentComponent,canActivate:[AuthGuard]},
      {path:"appoint-status",component:AppointmentStatusComponent,canActivate:[AuthGuard]},





    ]},
  {path: "admin",component: AdminComponent},
  {path: "loginadmin", component: LoginadminComponent},
  {path: "loginemployee", component: LoginemployeeComponent},
  {path: "employees", component: DisplayEmployeeComponent},
  {path: "registeremployees", component: AppliedEmployeeComponent},
  {path: "jobapply", component: JobApplyComponent},
  {path: "doctorhome", component: DoctorHomeComponent},
  {path: "appointedList", component: ViewAppointmentsComponent},
  {path: "recephome", component: RecepHomeComponent},
  {path: "medication",component: MedicationComponent},
  {path: "approveappointment", component: ApproveAppointmentComponent},
  {path: "makeappointment", component: MakeAppointmentComponent},
  {path: "approveAppointment", component: ApproveAppointmentComponent},
  {path: "billing", component: MedicationReportComponent},
  {path: "changeemployeepassword",component: ChangeEmployeePasswordComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
