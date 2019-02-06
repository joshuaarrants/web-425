import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatButtonModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatMenuModule,
    MatSidenavModule, 
    MatIconModule, 
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
