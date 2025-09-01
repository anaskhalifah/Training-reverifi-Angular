import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {IMAGES} from '../../../public/index'
@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

    isModalOpen = false;
    openModal = () => {this.isModalOpen=true;}
    closeModal = () => {this.isModalOpen=false;}

    images = IMAGES;
}
