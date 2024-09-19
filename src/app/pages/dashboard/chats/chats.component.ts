import { Component,OnInit } from '@angular/core';
import { ChatsService } from '../../../services/chats/chats.service';
import { CommonModule } from '@angular/common';
import { Chat } from '../../../models/chat';
@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.css'
})
export class ChatsComponent  implements OnInit {
  chats: Chat[] = [];
  constructor(private chatsService: ChatsService) { }
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
