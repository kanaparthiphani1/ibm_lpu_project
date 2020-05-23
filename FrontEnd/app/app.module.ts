import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'

import { ChangeEmployeePasswordComponent } from './components/change-employee-password/change-employee-password.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './components/user/user.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EmailVerifyComponent } from './components/email-verify/email-verify.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { DoctorViewComponent } from './components/doctor-view/doctor-view.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { PatientAppointmentComponent } from './components/patient-appointment/patient-appointment.component';
import { AppointmentStatusComponent } from './components/appointment-status/appointment-status.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import {AuthGuard} from "./auth.guard";



import { AdminComponent } from './components/admin/admin.component';
import { LoginadminComponent } from './components/loginadmin/loginadmin.component';
import { LoginemployeeComponent } from './components/loginemployee/loginemployee.component';
import { DisplayEmployeeComponent } from './components/display-employee/display-employee.component';
import { AppliedEmployeeComponent } from './components/applied-employee/applied-employee.component';
import { JobApplyComponent } from './components/job-apply/job-apply.component';
import { DoctorHomeComponent } from './components/doctor-home/doctor-home.component';
import { ViewAppointmentsComponent } from './components/view-appointments/view-appointments.component';
import { RecepHomeComponent } from './components/recep-home/recep-home.component';
import { MakeAppointmentComponent } from './components/make-appointment/make-appointment.component';
import { ApproveAppointmentComponent } from './components/approve-appointment/approve-appointment.component';
import { MedicationComponent } from './components/medication/medication.component';

import { MedicationReportComponent } from './components/medication-report/medication-report.component';
import { ApprovedAppointmentComponent } from './components/approved-appointment/approved-appointment.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    UserHomeComponent,
    UserProfileComponent,
    EmailVerifyComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    DoctorViewComponent,
    DoctorListComponent,
    PatientAppointmentComponent,
    AppointmentStatusComponent,
    ContactUsComponent,
    OurTeamComponent,
    AdminComponent,
    LoginadminComponent,
    LoginemployeeComponent,
    DisplayEmployeeComponent,
    AppliedEmployeeComponent,
    JobApplyComponent,
    DoctorHomeComponent,
    ViewAppointmentsComponent,
    RecepHomeComponent,
    MakeAppointmentComponent,
    ApproveAppointmentComponent,
    MedicationComponent,

    ChangeEmployeePasswordComponent,
    MedicationReportComponent,
    ApprovedAppointmentComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
