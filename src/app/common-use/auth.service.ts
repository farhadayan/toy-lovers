import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient,
    //private jwtHelper: JwtHelperService,
    

   ) {}

  apiUrl: string='localhost:4200';



  public isAuthenticated() : boolean {
        
    const token = sessionStorage.getItem('authToken');
    return token==='success' ? true : false
        
  }


}
