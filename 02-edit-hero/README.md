# Add hero class in shared folder

## Apply hero class 
1 add codes into /src/app/shared/models/hero.class.ts 
```typescript
export class Hero {
  id: number;
  name: string;
}
```
2. add import into /src/app/app.component.ts
```typescript
import { Hero } from './shared/models/hero.class';
```
3. add codes into /src/app/app.component.ts AppComponent
```typescript
  title = 'Tour of Hero';
  hero: Hero = {
    id: 1,
    name: 'windstorm'
  };
```
4. Add codes in /src/app/app.component.html
```html
<h2>{{title}}</h2>
<h3>{{hero.name}} details!</h3>
<div><label>id: </label>{{hero.id}}</div>
<div><label>name: </label>{{hero.name}}</div>
```