# Add title and hero 
1. open /src/app.component.ts
2. add the codes below into AppComponent
```typescript
export class AppComponent {
  "title = 'Tour of Heroes'";
  "hero = 'Windstorm'";
}
```
3. add codes in /src/app.component.html
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
