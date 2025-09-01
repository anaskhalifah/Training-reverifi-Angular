import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Profile } from './profile/profile';
import { Achievment } from './achievment/achievment';
import { List } from './list/list';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Profile,Achievment,List,Footer],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('reverifi');
}
