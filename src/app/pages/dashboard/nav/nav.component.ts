import { Component,  OnInit,Input } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AboutComponent } from "../../home/about/about.component";
import { User } from '../../../models/user';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterModule,
    AboutComponent
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  user: User | null = {};
  closesession() {
    this.authService.logout();
    this.authService.removeProfile();
    this.router.navigate(['/home']);
  }
    ngOnInit(): void {
    this.user =  this.authService.getProfile();
    }
}
