import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LoginState } from './state/login-state';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { UserState } from '../../top-bar/state/user-state';
import { userLogin } from './state/login-guard';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

import { Router } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';

const fb = new FormBuilder();
export const loginForm = fb.group({
  username: fb.control<string>('', [Validators.required]),
  password: fb.control<string>('', [Validators.required, Validators.min(3)]),
  remember:<boolean>(false)
});


export const loginFormReset = () => {
  loginForm.reset();
  loginForm.patchValue({
    username: '',
    password: '',
    remember:false
  });
};

@Component({
  selector: 'app-login',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'),
      ),
    ]),
  ],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule
    
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export default class LoginComponent {
  loginForm = loginForm;
  hide = true;
  user!: SocialUser;
  invalidLogin:boolean=true;
  checked:boolean= false;

  get passwordInput() {
    return this.loginForm.get('password');
  }

  constructor(
    private router:Router,
    private loginState: LoginState,
    private userState: UserState,
    private authService: SocialAuthService
  ) {
    console.log('ul:', userLogin);
  }

  okLogin() {
    
    if (
      this.loginState.userInfo().find((x) => {
       // this.userState.userRoleSignal.set(x.role);
        return true
          ? x.name.toLowerCase() ===
              this.loginForm.controls.username.value?.toLowerCase() &&
              x.password === this.loginForm.controls.password.value
          : false;
      })
    ) {
      this.userState.userStateSignal.set(this.loginForm.controls.username.value);
      sessionStorage.setItem('authToken','success')
      this.router.navigateByUrl('/my-page/sell')
      this.invalidLogin=false
    }

    loginForm.reset();
  }
  cancelLogin() {
    loginForm.reset();
    this.router.navigateByUrl('/')
  }

  rememberMe(){
    
    this.checked=!this.checked
    
//FUTURE: remember me authentication will get from back end
//beloww lines are temporary and will be removed for security reason. 
  if(this.checked==true && loginForm.controls.username.value!=null &&loginForm.controls.password.value!=null){
    localStorage.setItem("username", loginForm.controls.username.value)
    localStorage.setItem("password", loginForm.controls.password.value)
  }
   else{
    localStorage.removeItem('username')
    localStorage.removeItem('password')
   }
  }
  forgotPassword() {}

  ngOnInit() {

    if(localStorage.getItem('username')!=null && localStorage.getItem('username')!='')
    {
      if(localStorage.getItem('password')!=null && localStorage.getItem('password')!='')
        {
          this.loginForm.controls.username.setValue(localStorage.getItem('username')),
          loginForm.controls.password.setValue(localStorage.getItem('password'))
            
          this.okLogin()
        }
      }
    
  }

  signOut(): void {
    console.log("sign out")
    localStorage.removeItem('password')
    localStorage.removeItem('username')
    sessionStorage.removeItem('authToken')
    this.authService.signOut();
  }

}
