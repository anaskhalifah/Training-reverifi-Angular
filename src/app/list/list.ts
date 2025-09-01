import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IMAGES } from '../../../public';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
  IMAGES = IMAGES;
  cards:{id:number;img:string;price:string;days:number;available:boolean}[] = [
      { id: 1, img: this.IMAGES['home1'], price: "$450,000", days: 7, available: false },
      { id: 2, img: this.IMAGES['home2'], price: "$510,000", days: 12, available: true },
      { id: 3, img: this.IMAGES['home3'], price: "$600,000", days: 2, available: true },
  ];
}
