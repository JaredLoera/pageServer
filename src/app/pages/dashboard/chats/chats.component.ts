import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chat } from '../../../models/chat';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ChatsService } from '../../../services/chats/chats.service';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule
  ],
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.css'
})
export class ChatsComponent  implements OnInit {
  chats: Chat[] = [];
  user: User = this.authService.getProfile()!;
  constructor(private chatsService: ChatsService,private authService:AuthService) { }
  ngOnInit(): void {
    this.cargarChats();
    this.chatsService.onMessage().subscribe((message) => {
      console.log('Mensaje recibido', message);
      this.cargarChats();
    }
    )
  }
  cargarChats() {
    this.chatsService.getChats().subscribe((messages) => {
      this.chats = messages;
      console.log('Chats recibidos', messages);
    })
  }


  selectedChat: any = null;
  newMessage: string = '';

  selectChat(chat: any) {
    this.selectedChat = chat;
  }

  sendMessage() {
    if (this.newMessage.trim() && this.selectedChat) {
      this.selectedChat.messages.push({ text: this.newMessage });
      this.newMessage = '';
    }
  }
}
