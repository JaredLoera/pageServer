import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatsService } from '../../../services/chats/chats.service';
import { CommonModule } from '@angular/common';
import { Message } from '../../../models/message';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css','../../dashboard/chats/chats.component.css']
})
export class ChatComponent {
  id: string = '';
  public messages: Message[] = [];
  constructor(private route: ActivatedRoute,private chatService:ChatsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getMessages();
      console.log('Chat ID', this.id);
    });

  }
  getMessages(){
    this.chatService.getMessages(this.id).subscribe((messages) => {
       this.messages = messages;
       console.log('Mensajes recibidos', messages);
    })
  }
}
