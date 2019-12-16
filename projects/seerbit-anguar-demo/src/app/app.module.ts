import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxSeerbitModule} from 'seerbit-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,NgxSeerbitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
