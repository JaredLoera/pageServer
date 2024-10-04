import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatsService } from '../../../services/chats/chats.service';
import { CommonModule } from '@angular/common';
import { Message } from '../../../models/message';
import { Encript } from '../../../util/encript';


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
    });

  }
  getMessages(){
    this.chatService.getMessages(this.id).subscribe((messages) => {
      this.messages = messages.map(msg => {
        const decryptedMessage = Encript.decrypt(msg.message);
        return {
          ...msg,
          message: decryptedMessage
        };
      });
    })
  }
/////////////////ESTE METODO ES ENCRIPTA EL MENSAJE Y DESPUES SE VUELVE A ENCRIPTAR, 
/*
VICTOR SI HACES ESTO, PRIMERO VE LO DE ENVIAR MENSAJES DESDE AQUI DEPUES DE QUE TERMINES CON EL DISEÑO Y CORRECCION
DE ESAS COSAS AHI SI LE METES ESTO DE ENVIAR MENSAJES DESDE EL FRONTEND


PASOS SI VAS A HACER ESTO HAY EN LA CARPETA RAIZ QUE SE LLAMA "generateSecret.js" EJECUTA ESE ARCHIVO CON NODE "node generateSecret.js"
Y DEBES DE ENCENDER LA API YA QUE CON ESTO CAMBIA SI NO PUES AHI TE PASO LA CONFIGURACION POR WHATSAPP
*/
  sendMessage(message: string){
   const encMessage = Encript.encrypt(message);
    this.chatService.sendMessage(this.id, encMessage).subscribe((message) => {
      console.log('Mensaje enviado', message);
    });
  }
}
