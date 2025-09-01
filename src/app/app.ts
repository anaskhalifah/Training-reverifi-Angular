import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Profile } from './profile/profile';
import { Achievment } from './achievment/achievment';
import { List } from './list/list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Profile,Achievment,List],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('reverifi');
}
