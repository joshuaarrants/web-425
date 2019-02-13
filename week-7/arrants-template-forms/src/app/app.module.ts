import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatFormFieldModule, MatCardModule, MatInputModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    MatButtonModule,
    MatIconModule, 
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule, 
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
