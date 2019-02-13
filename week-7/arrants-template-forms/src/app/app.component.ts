import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'arrants-template-forms';

  onSubmit(formData) {
    alert('Username: ' + formData.username + '\nSSN: ' + formData.ssn + '\nPassword: ' + formData.passwordsGroup.password + '\nConfirm Password: ' + formData.passwordsGroup.pconfirm)
  }
}
