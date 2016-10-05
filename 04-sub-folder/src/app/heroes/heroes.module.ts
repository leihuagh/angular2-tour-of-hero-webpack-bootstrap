import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
    imports: [FormsModule],
    exports: [
        FormsModule,
        HeroListComponent,
        HeroDetailComponent
    ],
    declarations: [
        HeroListComponent,
        HeroDetailComponent
    ],
    providers: []
})
export class HeroesModule {}
