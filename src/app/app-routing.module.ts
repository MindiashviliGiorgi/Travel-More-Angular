import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsPanelComponent } from './hotels-panel/hotels-panel.component';
import { LoginComponent } from './login/login.component';
import { HotelsMainPageComponent } from './hotels-main-page/hotels-main-page.component';
import { HotelPageComponent } from './hotel-page/hotel-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { OfferComponent } from './offer/offer.component';
import { FixregisterComponent } from './fixregister/fixregister.component';
import { FixloginComponent } from './fixlogin/fixlogin.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    path : '',
    component : HotelsPanelComponent     
  },
  {
    path : 'hotelsmain',
    component : HotelsMainPageComponent
  },
  {
    path : 'hotelpage',
    component : HotelPageComponent
  },
  {
    path : 'adminpanel',
    component : HotelsPanelComponent,
    canActivate : [AuthGuard]
  },
  {
    path : 'offerpage',
    component : OfferComponent
  },
  {
    path : 'fixlogin',
    component : FixloginComponent
  },
  {
    path : 'fixregister',
    component : FixregisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
