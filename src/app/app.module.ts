import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SiginfoComponent } from './siginfo/siginfo.component';
import { SigoutputComponent } from './siginfo/sigoutput/sigoutput.component';


@NgModule({
  declarations: [
    AppComponent,
    SiginfoComponent,
    SigoutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
