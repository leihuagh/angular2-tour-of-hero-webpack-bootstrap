# Modify HTML codes
```html
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div>
    <label>name: </label>
    <input value="{{hero.name}}" placeholder="name">
  </div>
```

## Add or Make sure FormsModule has been applied in app.module.ts 
1 add codes into /src/app/shared/models/hero.class.ts 
```typescript
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    ...
    FormsModule
  ],
  ...
})
export class AppModule { }
```
## Modify input area to two-way binding
```html
<input [(ngModel)]="hero.name" placeholder="name">
```