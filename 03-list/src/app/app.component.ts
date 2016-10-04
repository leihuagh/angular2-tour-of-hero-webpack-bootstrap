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
  heroes = HEROES;

  selectedHero: Hero;

  OnSelected(hero: Hero): void {
    this.selectedHero = hero;
  }
}
