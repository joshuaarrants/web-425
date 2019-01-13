import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <div class="container">
    <div class="row">
      <h2>Welcome to the page that is all about me!</h2>
    </div>
  </div>
  `,
  styles: [`
  .container {
    margin-top: 20px;
  }
  h2 {
    color: blue; 
  }
  `]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
