import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { catchError, EMPTY, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ValidMessage } from '../../models/validError';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../login/main-login/main-login.component.css']
})
export class RegisterComponent {
  public registerForm: FormGroup;
  public errorMessage!: String;
  public errorsvalid: ValidMessage[] = [];
  showPasswordMismatch = false;  // Nueva variable para mostrar el mensaje

  public user: User = {
    email: '',
    password: ''
  };

  constructor(private userService: UserService, private authService: AuthService, private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      email: [this.user.email, [Validators.required, Validators.email]],
      password: [this.user.password, [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }
  passwordMatchValidator(): boolean {
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;

    return password === confirmPassword;
  }
  submitRegister() {
    this.showPasswordMismatch = false;

    if (!this.passwordMatchValidator()) {

      this.showPasswordMismatch = true;
      return;
    }
    if (this.registerForm.valid) {
      this.user = this.registerForm.value;
      this.userService.createUser(this.user).pipe(
        catchError((error: HttpErrorResponse) => {
          this.errorMessage = "";
          if (error.status === 400) {
            this.errorsvalid = error.error;
          }
          return EMPTY;
        })
      ).subscribe((user: User) => {
        console.log(user);
      }
      )
    }
  }
}
