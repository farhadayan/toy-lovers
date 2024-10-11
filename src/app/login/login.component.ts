import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
import { user } from '../../share/user-data';
import { UserState } from '../../top-bar/state/user-state';
import { userLogin } from './state/login-guard';

const fb = new FormBuilder();
export const loginForm = fb.group({
  username: fb.control<string>('', [Validators.required]),
  password: fb.control<string>('', [Validators.required, Validators.min(3)]),
});
export const loginFormReset = () => {
  loginForm.reset();
  loginForm.patchValue({
    username: '',
    password: '',
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
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  login = loginForm;
  hide = true;

  get passwordInput() {
    return this.login.get('password');
  }

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dialogData: user,
    public dialogRef: MatDialogRef<LoginComponent>,
    private loginState: LoginState,
    private userState: UserState,
  ) {
    console.log('ul:', userLogin);
  }

  okLogin() {
    if (
      this.loginState.userInfo().find((x) => {
        this.userState.userRoleSignal.set(x.role);
        return true
          ? x.name.toLowerCase() ===
              this.login.controls.username.value?.toLowerCase() &&
              x.password === this.login.controls.password.value
          : false;
      })
    ) {
      this.userState.userStateSignal.set(this.login.controls.username.value);

      this.dialogRef.close('success');
    }

    loginForm.reset();
  }
  cancelLogin() {
    loginForm.reset();
    this.dialogRef.close('fail');
  }
  forgotPassword() {}
}
