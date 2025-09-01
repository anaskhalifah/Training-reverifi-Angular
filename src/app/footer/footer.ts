import { Component, signal } from '@angular/core';
import {IMAGES} from '../../../public';
@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  IMAGES = IMAGES;
 currentYear = signal(new Date().getFullYear());
}
