import { Component } from '@angular/core';
import '../style/app.scss';
import { Hero } from './shared/models/hero.class';
import { HEROES } from './shared/models/hero.model';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tour of Hero';
  hero: Hero = {
    id: 1,
    name: 'windstorm',
    image: 'img/200x200.png',
    level: 1
  };

  heroes = HEROES;
}
