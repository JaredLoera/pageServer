import { NgClass } from '@angular/common';
import { Component ,HostListener} from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
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
