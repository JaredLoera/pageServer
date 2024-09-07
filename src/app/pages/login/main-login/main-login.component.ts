import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { FormGroup,ReactiveFormsModule,FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { User } from '../../../models/user';
import { Token } from '../../../models/token';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-main-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './main-login.component.html',
  styleUrl: './main-login.component.css'
})
export class MainLoginComponent {
  public userForm: FormGroup;
  public user: User = {
    email: '',
    password: ''
  };

  constructor(private userService:UserService,private authService:AuthService,private fb: FormBuilder,private router: Router) {
    this.userForm = this.fb.group({
      email: [this.user.email, [Validators.required, Validators.email]],
      password: [this.user.password, [Validators.required]]
    });
  }
  
  submitlogin(){
    this.user = this.userForm.value;
    this.authService.login(this.user).subscribe((token:Token)=>{
      this.authService.setToken(token);
      this.userService.getProfile().subscribe((user:User)=>{
        this.authService.setProfile(user);
      })
    })
    this.router.navigate(['/dashboard']);
  }
}
