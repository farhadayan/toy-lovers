import { Injectable, signal } from '@angular/core';
import { LoginService } from '../login-service';

@Injectable({
  providedIn: 'root',
})
export class LoginState {
  constructor(private loginService: LoginService) {}
  userInfo = signal(this.loginService.fetchUserInfo());
}
