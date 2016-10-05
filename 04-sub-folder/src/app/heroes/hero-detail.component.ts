import { Component, Input } from '@angular/core';
import { Hero } from '../shared/models/hero.class';

@Component({
    selector: 'my-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {
    @Input()
    hero: Hero;
}
