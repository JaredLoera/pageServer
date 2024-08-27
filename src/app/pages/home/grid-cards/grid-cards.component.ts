import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-grid-cards',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.css','../main-home/main-home.component.css']
})
export class GridCardsComponent implements OnInit {
 constructor(public userService:UserService) { }
  users: User[] = [];
  ngOnInit() {
    this.userService.getPublicProfiles().subscribe((users: User[]) => {
      this.users = users;
    });
  }
}