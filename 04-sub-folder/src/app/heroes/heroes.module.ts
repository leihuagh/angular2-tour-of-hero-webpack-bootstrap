import { NgModule } from '@angular/core';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
    imports: [],
    exports: [
        HeroListComponent,
        HeroDetailComponent
    ],
    declarations: [
        HeroListComponent,
        HeroDetailComponent
    ],
    providers: []
})
export class HeroesModule{}
