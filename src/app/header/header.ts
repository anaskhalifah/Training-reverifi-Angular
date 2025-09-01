import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IMAGES } from '../../../public';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  imports: [CommonModule]
})
export class Header{
  dropDownOpen = false;
  mobileOpen = false;
  IMAGES = IMAGES;

  toggleDropdown() { this.dropDownOpen = !this.dropDownOpen; }
  toggleMobileMenu() { this.mobileOpen = !this.mobileOpen; }
}
