import 'zone.js';
import 'reflect-metadata';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule }   from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import MainComponent from './components/main-component';
import LoginComponent from './components/login-component';
import HomeComponent from './components/home-component';
import HeaderComponent from './components/header-component';
import FooterComponent from './components/footer-component';
import LoginService from './services/login-service';

import AppRoutingModule from './routes/app-routing-module';

import '../css/main.less';


// Main app class
@NgModule({
  imports: [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ LoginComponent, MainComponent, HomeComponent,
    HeaderComponent, FooterComponent
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    LoginService,
  ],
  bootstrap: [ MainComponent ]
})
class AppModule { }

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
