import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-product-detail',
  template: `
  <div class="container">
    <div class="row">
      <h1 class="product">Product Detail</h1>
    </div>
    <div class="row">
      <input placeholder="Enter your name" type="text" [formControl]="name" />
    </div>
  </div>
  `,
  styles: [`
  .container {
    margin: 10px;
  }
  h1 {
    color: darkblue;
  }
  `]
})
export class ProductDetailComponent implements OnInit {

  name: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
