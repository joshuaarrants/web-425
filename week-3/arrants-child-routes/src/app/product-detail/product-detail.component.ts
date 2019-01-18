import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  template: `
    <div class='product'>
      <h1>Detail Information for the Product: {{ productId }}</h1>
      <router-outlet></router-outlet>
      <p><a [routerLink]="['./seller', sellerId]">Seller Details</a><p>
    </div>
  `,
  styles: [`
    .product {
      background-color: lightblue; 
    }
  `]
})
export class ProductDetailComponent implements OnInit {

  productId: string;
  sellerId = 771;

  constructor(route: ActivatedRoute) {
    this.productId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
