import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-info',
  template: `
  The seller is "ME", id {{ sellerID }}
  `,
  styles: [`
    :host { background: red; }
  `]
})
export class SellerInfoComponent implements OnInit {

  sellerID: string;

  constructor(route: ActivatedRoute) {
    this.sellerID = route.snapshot.paramMap.get('id');
  }


  ngOnInit() {
  }

}
