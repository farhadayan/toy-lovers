import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) {}

  apiUrl: string='localhost:4200';

  loginUser(){

  }


  public isAuthenticated() : boolean {
    const token = localStorage.getItem('authToken');
    const helper = new JwtHelperService();
    const isExpired = helper.isTokenExpired(token);
    console.log("isAuthen: ",token,"hel:", helper,"exp:", localStorage.key)
    
    return !isExpired;
  }


}
