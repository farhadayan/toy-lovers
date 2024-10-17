import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService  } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient,
    private jwtHelper: JwtHelperService
   ) {}

  apiUrl: string='localhost:4200';

  loginUser(){

  }


  public isAuthenticated() : boolean {
        
    const token = sessionStorage.getItem('authToken');
    
    const isExpired = this.jwtHelper.isTokenExpired(token);
    console.log("suc: ",token, "exp:", isExpired)
    
    if (token==='success')
    {
      console.log("isAuthen suc: ",token, "exp:", sessionStorage.getItem('authToken'))
      return true
    }
    
    return false

    
    //return !isExpired;
  }


}
