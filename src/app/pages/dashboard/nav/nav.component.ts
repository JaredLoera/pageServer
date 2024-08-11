import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AboutComponent } from "../../home/about/about.component";

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
export class NavComponent {
  constructor(private authService:AuthService, private router: Router) {}
  closesession(){
    this.authService.logout();
    this.router.navigate(['/home']); 
  }
}
