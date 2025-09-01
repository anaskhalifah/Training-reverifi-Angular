import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Profile],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('reverifi');
}
