import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  imports: [CommonModule]
})
export class Header{
  dropDownOpen = false;
  mobileOpen = false;

  toggleDropdown() { this.dropDownOpen = !this.dropDownOpen; }
  toggleMobileMenu() { this.mobileOpen = !this.mobileOpen; }
}
