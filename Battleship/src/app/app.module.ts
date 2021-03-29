import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomecarriersigninComponent } from './components/homecarriersignin/homecarriersignin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomecarriersigninComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
