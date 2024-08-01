import { Component,HostListener , OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterModule,
    NgIf
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css','../main-home/main-home.component.css']
})
export class NavComponent implements OnInit {
  isloged: boolean;
  constructor(private authService:AuthService){
    this.isloged = this.authService.isAuthenticated();
  }
  ngOnInit(): void {
    console.log(this.authService.getToken())
    console.log(this.isloged)
  }


  navbarOpen = false;
  isAffixed = false;
  toggleNavbar(){
    this.navbarOpen = !this.navbarOpen;
    const mainListDiv = document.getElementById('mainListDiv');
    if (mainListDiv) {
      mainListDiv.classList.toggle('show_list');
      mainListDiv.style.display = 'block';
    }
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isAffixed = window.pageYOffset > 50;
  }
}
