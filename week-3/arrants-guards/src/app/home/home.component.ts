import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="container">
    <div class = "row">
      <h2>Welcome to the home page of Joshua Arrants!</h2>
    </div>
  </div>
  `,
  styles: [`
  .container {
    margin: 10px;
  }
  h2 {
    color: lightblue;
  }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
