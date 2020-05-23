import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import {HospitalService} from "./services/hospital.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private hospitalService:HospitalService,private router:Router) {
  }

  canActivate(): boolean{
    if(this.hospitalService.Loggedin())
    {

      return true;
    }
    else {
      this.router.navigate(["/login"]);
      return false;
    }
  }

}
