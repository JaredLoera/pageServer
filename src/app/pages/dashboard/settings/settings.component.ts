import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit {
  user: User = {};
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getProfile().subscribe((data: User) => {
      this.user = data;
      this.updateUserInfo();
    })
  }
  
  userInfo = [
    { label: 'Nombre', value: '', key: 'fullName', isEditing: false, type: 'text' },
    { label: 'Email', value: '', key: 'email', isEditing: false, type: 'text' },
    { label: 'Descripcion', value: '', key: 'description', isEditing: false, type: 'text' },
    { label: 'Link de avatar', value: '', key: 'linkavatar', isEditing: false, type: 'text' },
    { label: 'Linkedin', value: '', key: 'linkedin', isEditing: false, type: 'text' },
    { label: 'Github', value: '', key: 'github', isEditing: false, type: 'text' },
  ];

  updateUserInfo() {
    this.userInfo = [
      { label: 'Nombre', value: this.user.fullName || '', key: 'fullName', isEditing: false, type: 'text' },
      { label: 'Email', value: this.user.email || '', key: 'email', isEditing: false, type: 'text' },
      { label: 'Descripcion', value: this.user.description || '', key: 'description', isEditing: false, type: 'text' },
      { label: 'Link de avatar', value: this.user.linkavatar || '', key: 'linkavatar', isEditing: false, type: 'text' },
      { label: 'Linkedin', value: this.user.linkedin || '', key: 'linkedin', isEditing: false, type: 'text' },
      { label: 'Github', value: this.user.github || '', key: 'github', isEditing: false, type: 'text' },
];
  }
  toggleEdit(key: string) {
    const item = this.userInfo.find(info => info.key === key);
    if (item) {
      item.isEditing = !item.isEditing;
    }
  }

  saveEdit(key: string) {
    const item = this.userInfo.find(info => info.key === key);
    if (item) {
      item.isEditing = false;
      console.log('Datos guardados', item.value);
    }
  }

  saveAll() {
    console.log('Datos guardados', this.userInfo);
    this.user.fullName = this.userInfo[0].value;
    this.user.email = this.userInfo[1].value;
    this.user.description = this.userInfo[2].value;
    this.user.linkavatar = this.userInfo[3].value;
    this.user.linkedin = this.userInfo[4].value;
    this.user.github = this.userInfo[5].value;
    console.log('Datos guardados', this.user);
  }

}
