import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div class="wrapper">
      <div class="frm-login">
        <mat-card class="login-panel frm-login-panel">
          <mat-card-header class="frm-login-header">
            <mat-toolbar class="frm-login-toolbar">
              Login Form
            </mat-toolbar>
          </mat-card-header>
    
          <mat-card-content class="frm-login-body">
            <mat-form-field>
              <input type="text" matInput [(ngModel)]="username" placeholder="Username">
            </mat-form-field>
    
            <mat-form-field>
              <input type="password" matInput [(ngModel)]="password"  placeholder="Password">
            </mat-form-field>
    
          </mat-card-content>
    
          <mat-card-actions class="frm-login-actions">
            <button mat-raised-button class="btn-cancel" (click)="onClear()">Cancel</button>
            <button mat-raised-button class="btn-login" (click)="onSubmit()">Sign In</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
  .frm-login { width: 50%; margin: 0 auto; }
  .frm-login-panel { border: 1px solid lightgray; }
  .frm-login-header { background-color: lightgray; }
  .frm-login-toolbar { background-color: gray; color: white; }
  .frm-login-body { display: flex; flex-direction: column; margin-top: 15px; }
  .btn-login { background-color: lightgreen; color: white; }
  .btn-cancel { background-color: red; color: white;}
  .frm-login-actions { text-align: right; }
  .wrapper { width: 100%; margin-top: 10%; }
  `]
})
export class LoginComponent {

  username: string
  password: string

  onClear() {
    this.username = ''
    this.password = ''
  }

  onSubmit() {
    alert('Username: ' + this.username + '\nPassword: ' + this.password)
  }
}
