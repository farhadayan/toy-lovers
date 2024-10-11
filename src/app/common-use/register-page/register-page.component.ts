import { Component } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormBuilder, Validators } from '@angular/forms';

const fb = new FormBuilder();

export const StrongPasswordRegx: RegExp =
  /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;
  
@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})


export default class RegisterPageComponent {
  registerForm = fb.group({
    email:fb.control('',[Validators.required, Validators.email]),
    password:fb.control('', [Validators.required, Validators.pattern(StrongPasswordRegx)]),
    displayName:fb.control(''),
    phone:fb.control('',[Validators.required, Validators.pattern('^[- +()0-9]+$')])
    
  })

}
