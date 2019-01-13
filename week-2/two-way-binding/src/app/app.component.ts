import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <br /><br /><br />
  <div class = "container-fluid two-way-form">
    <h2>Two-Way Binding Example</h2>
    <div class = "form-group">
      <input class = "form-control" type = "text" placeholder = "Enter your favoriate brand..." [(ngModel)] = "brand"/>
      <br />
      <button class="btn btn-primary form-control" (click)="brand=''">Clear Brand</button>
    </div>
    
    <div class = "form-group">
      <p class = "alert-success">My favoriate brand is, {{brand}}!</p>
    </div>
  </div>
  `,
  styles: [
    `
  .two-way-form{
    width: 50%;
  }
  `
  ]
})
export class AppComponent {
  title = 'two-way-binding';

  //class property
  brand:string = "Under Armour";
}
