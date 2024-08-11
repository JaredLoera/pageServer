import { Component ,OnInit} from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { Rol } from '../../../models/rol';
import { CommonModule} from '@angular/common';
@Component({
  selector: 'app-userstable',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './userstable.component.html',
  styleUrl: './userstable.component.css'
})
export class UserstableComponent implements OnInit {
  constructor(private usersService: UserService) {}
  public users: User[] = [];
  public rols: Rol[]= [];
  ngOnInit() {
    this.usersService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
    this.usersService.getRols().subscribe((rols:Rol[])=>
    {
      this.rols = rols
    });
  }
}
