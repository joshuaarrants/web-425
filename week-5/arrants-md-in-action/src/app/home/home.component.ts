import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="container">
    <div class="row">
      <h2>Welcome to my home page!</h2>
    </div>
  </div>
  `,
  styles: [`
  .container {
    margin: 20px;
  }
  h2 {
    color: white; 
  }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
