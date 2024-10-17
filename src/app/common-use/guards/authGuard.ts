import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  // canActivate(): boolean {
  //   if (this.authService.isAuthenticated()) {
  //     return true;
  //   } else {
  //     this.router.navigate(['/']);
  //     return false;
  //   }
  // }

  canActivate(route: ActivatedRouteSnapshot) {
    if (this.authService.isAuthenticated())
    {
      
      return true
    }
    this.router.navigate(['/'])
    return false
  }
}