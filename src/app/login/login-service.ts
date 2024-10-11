import { Injectable } from '@angular/core';
import { userInfo } from '../../share/user-data';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  fetchUserInfo() {
    return userInfo;
  }
}
