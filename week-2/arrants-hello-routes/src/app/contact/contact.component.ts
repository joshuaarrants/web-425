import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <div class="container">
    <div class="row">
      <h2>Want to contact me? You have come to the right page!</h2>
    </div>
  </div>
  `,
  styles: [`
  .container {
    margin-top: 20px;
  }
  h2 {
    color: lightblue;
  }
  `]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
