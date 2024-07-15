import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css','../main-home/main-home.component.css']
})
export class NavComponent {
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
