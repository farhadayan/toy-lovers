import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
//import { HttpClient } from '@angular/common/http';

export type Role = 'user' | 'admin';
@Injectable({
  providedIn: 'root',
})
export class UserState {
  //private validUser = new BehaviorSubject<boolean>(false);
  //validUser$ = this.validUser.asObservable();

  userStateSignal: WritableSignal<string | null> = signal(null);
  userRoleSignal= signal<Role>('user')

  fetchUserState() {
    // this.validUser.next(true);
    return this.userStateSignal() !== null ? true : false;
  }
  
  fetchUserRole(){
    return this.userRoleSignal();
  }
}
