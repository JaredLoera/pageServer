import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ImgsaveComponent } from '../../components/imgsave/imgsave.component';
import { MatDialog } from '@angular/material/dialog';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ImgsaveComponent
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit {
  user: User = {};
  constructor(private userService: UserService, public dialog: MatDialog) { }

  showModal = false;

  changeimg(){
    this.showModal = true
  }

  ngOnInit(): void {
    this.userService.getProfile().subscribe((data: User) => {
      this.user = data;
  
    })
  }
  onSubmit(f: NgForm) {
    this.user.github = f.value.github;
    this.user.linkedin = f.value.linkedin;
    this.user.description = f.value.description;
    this.user.fullName = f.value.fullName;

    this.userService.updateUser(this.user).subscribe((data: User) => {
      this.user = data;
    });
  }
  
}
