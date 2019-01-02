import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';
import { BodyComponent } from './body/body.component';
import { AboutComponent } from './body/about/about.component';
import { RetailComponent } from './body/retail/retail.component';
import { LoginComponent } from './body/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarMobileComponent,
    BodyComponent,
    AboutComponent,
    RetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
