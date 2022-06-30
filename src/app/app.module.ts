import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { SigninComponent } from './pages/auth/signin/signin.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { DriversignupComponent } from './pages/auth/driversignup/driversignup.component';
import { MerchantsignupComponent } from './pages/auth/merchantsignup/merchantsignup.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { InvestnowComponent } from './pages/investnow/investnow.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsdetailsComponent } from './pages/news/newsdetails/newsdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    DriversignupComponent,
    MerchantsignupComponent,
    ContactusComponent,
    AboutusComponent,
    InvestnowComponent,
    NewsComponent,
    NewsdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
