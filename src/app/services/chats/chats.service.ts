import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { io, Socket } from 'socket.io-client';
import { environment } from '../../../environments/environment';
import { Chat } from '../../models/chat';
import { Message } from '../../models/message';
@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  public socket: Socket;
  constructor(private http: HttpClient, private authService: AuthService) {
    this.socket = io(environment.socket,
      {
        transports:['websocket']
      });
    this.socket.emit('user_connected', authService.getProfile()?.id);
  }
  disconnect() {
    this.socket.disconnect();
  }
  getChats(): Observable<Chat[]> {
    return this.http.get<Chat[]>(environment.baseUrl + 'chats', { headers: { Authorization: `Bearer ${this.authService.getToken()}` } })
  }

  onMessage(): Observable<any> {
    return new Observable(observer => {
      this.socket.on(`newChat:${this.authService.getProfile()?.id}`, (message: any) => {
        observer.next(message);
      });
    });
  }
  getMessages(chatId: string): Observable<Message[]> {
    return this.http.get<Message[]>(environment.baseUrl + `chat/${chatId}`, { headers: { Authorization: `Bearer ${this.authService.getToken()}` } })
  }
  sendMessage(chatId: string, message: string):Observable<Message> {
    return this.http.post<Message>(environment.baseUrl + `chat/send/${chatId}`, { "message":message }, { headers: { Authorization: `Bearer ${this.authService.getToken()}` } })
  }
}
