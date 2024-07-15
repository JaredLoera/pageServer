import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-grid-cards',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.css','../main-home/main-home.component.css']
})
export class GridCardsComponent {
  //arreglo de objetos con la informacion de las tarjetas
  users = [
    {"name":"Jared Loera","desc":"Un simple mortal","imgUrl":"https://scontent.ftrc2-1.fna.fbcdn.net/v/t1.6435-1/131485685_207914484250832_7758072306098470434_n.jpg?stp=dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=e4545e&_nc_eui2=AeG7wZpZO4YPVJRHJ7CD6bHseawEE6RkZN15rAQTpGRk3dQjJHY90aK45-ALDiiLIBA9j2FsBunXJDub1XgaW8-S&_nc_ohc=gg2GK78rNeIQ7kNvgHazCU7&_nc_ht=scontent.ftrc2-1.fna&oh=00_AYBIExddI5ejzxWHXnHawVb8IH3U7FrpLFLWxCNEdhKqNg&oe=66BADEC3"},
    {"name":"Julio cesar tovar","desc":"Dios quién más","imgUrl":"https://scontent.ftrc2-1.fna.fbcdn.net/v/t39.30808-6/430109171_7402215679836751_8365697622489127688_n.jpg?stp=dst-jpg_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=fe5ecc&_nc_eui2=AeHY9PEU3lDh9tsfUk15qWskHCN6Owr8irscI3o7CvyKu6rGU_7jPuWF-oStPc73kLKfm3zaKM1fPMi1fER9ga20&_nc_ohc=WYsSxH3Bb0gQ7kNvgG8GC4n&_nc_ht=scontent.ftrc2-1.fna&oh=00_AYCScElkIu6UvX2eVwXcAhWJMLo20qAuycuRgLsA-0wgmg&oe=66994FFB"},
    {"name":"Sebastian Ramirez","desc":"Un alcohlico en potencia y el que manda","imgUrl":"https://scontent.ftrc2-1.fna.fbcdn.net/v/t1.6435-1/72742544_2673600839337200_1980650114447835136_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=e4545e&_nc_eui2=AeHellmKWTa3ieEQHS7Pk-jAbyf6OA28NRxvJ_o4Dbw1HAoWzPoakIyWRYeNUKYD14kJriwOBzUN9g29Gwhn1hxF&_nc_ohc=ekJrmtNQVOcQ7kNvgF9AH30&_nc_ht=scontent.ftrc2-1.fna&oh=00_AYA0wFI1R4S5qXUdNTBw-SrlkWM36auQiKqAmvp18onrDQ&oe=66BAF006"},
    {"name":"El otro sebastian","desc":"El de cabello bonito","imgUrl":"https://scontent.ftrc2-1.fna.fbcdn.net/v/t39.30808-1/417126503_6664712240322803_3934211752135426087_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHh6c03eDxeFTh0b53EFuY0-UelrAwnpiX5R6WsDCemJf1NUEPfV_NlczK4LbbrIFSaq1jS5kH9COEHCLwg-CeQ&_nc_ohc=7G_TFfJktsQQ7kNvgGhslCz&_nc_ht=scontent.ftrc2-1.fna&oh=00_AYDJjikjLe4nAXBRkByVJI02Oh_MO-xPYHSeauZlDew-Ug&oe=6699360A"},
    {"name":"Julie alias: me da chorrillo todo","desc":"No le den cafe con leche","imgUrl":"https://scontent.ftrc2-1.fna.fbcdn.net/v/t39.30808-6/441923561_2174660022915511_5034756853818833742_n.jpg?stp=dst-jpg_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeHlP6u1_YnKIHDKzib58d4c8drWQdVwhz_x2tZB1XCHP4TagoXyVLER2mTrrwuDv6fOYf6g_hwTHYTXuEPEhvTl&_nc_ohc=AAFSKqfH280Q7kNvgFxp4Hh&_nc_ht=scontent.ftrc2-1.fna&oh=00_AYBOwr6m05K5ulxRlzwnrxTTUkVbxnelCyadNDW3jjNh2A&oe=66995555"}
  ]

}