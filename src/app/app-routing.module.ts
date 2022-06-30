import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { DriversignupComponent } from './pages/auth/driversignup/driversignup.component';
import { MerchantsignupComponent } from './pages/auth/merchantsignup/merchantsignup.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { InvestnowComponent } from './pages/investnow/investnow.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsdetailsComponent } from './pages/news/newsdetails/newsdetails.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'driversignup', component: DriversignupComponent },
  { path: 'merchantsignup', component: MerchantsignupComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'investnow', component: InvestnowComponent },
  { path: 'news', component: NewsComponent },
  { path: 'newsdetails', component: NewsdetailsComponent },
  
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
