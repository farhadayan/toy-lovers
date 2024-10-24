import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { Observable } from "rxjs";
import { UserState } from "../../../top-bar/state/user-state";


@Injectable({
  providedIn: 'root'
})

export class AuthGuard {
  constructor(private authService: AuthService, private router: Router,
    private userState: UserState,


  ) {}


  canActivate(route: ActivatedRouteSnapshot) {
    if (this.authService.isAuthenticated() && this.userState.fetchUserState())
    {      
      return true
    }
    this.router.navigate(['/'])
    return false
  }
}