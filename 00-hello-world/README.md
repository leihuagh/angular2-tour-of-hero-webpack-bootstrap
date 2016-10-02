# Add title and hero 
- open /src/app.component.ts
- add the codes below into AppComponent
```typescript
export class AppComponent {
  "title = 'Tour of Heroes'";
  "hero = 'Windstorm'";
}
```
- add codes in /src/app.component.html
```html
<div class="container">
  <div class="row">
    <div class="col-md-3">
      <h1>{{title}}</h1>
      <h2>{{hero}}</h2>
    </div>
    <!-- /.col -->    
  </div>
  <!-- /.row -->
</div>
```
