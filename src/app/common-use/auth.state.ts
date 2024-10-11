import { Injectable } from "@angular/core";

import { LoginState } from "../login/state/login-state";

@Injectable({
    providedIn:'root'
})
export class AuthState {

    constructor(
      private loginUser: LoginState
    ){}

    getUserRoles() {
      return this.loginUser.userInfo()
    }
      
}
