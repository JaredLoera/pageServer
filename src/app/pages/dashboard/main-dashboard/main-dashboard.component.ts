import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [
    NavComponent,
    RouterOutlet
  ],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.css'
})
export class MainDashboardComponent {

}
