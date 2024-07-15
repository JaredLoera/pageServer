import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { AboutComponent } from '../about/about.component';
import { GridCardsComponent } from '../grid-cards/grid-cards.component';
import { CloudServicesComponent } from '../cloud-services/cloud-services.component';
@Component({
  selector: 'app-main-home',
  standalone: true,
  imports: [
    NavComponent,
    AboutComponent,
    GridCardsComponent,
    CloudServicesComponent
  ],
  templateUrl: './main-home.component.html',
  styleUrl: './main-home.component.css'
})
export class MainHomeComponent {

}
