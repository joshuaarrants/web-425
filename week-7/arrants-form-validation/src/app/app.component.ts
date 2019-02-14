import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'arrants-form-validation';

  onSubmit(formData){
    alert('You entered: ' + formData.telephone)
  }
}
