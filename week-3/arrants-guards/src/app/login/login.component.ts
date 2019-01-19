import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  <div class="container">
    <div class = "row">
      <h2>Please login!</h2>
    </div>
  </div>
  `,
  styles: [`
  .container {
    margin: 10px;
  }
  h2 {
    color: red;
  }
  `]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
