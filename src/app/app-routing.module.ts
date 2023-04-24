import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsPanelComponent } from './hotels-panel/hotels-panel.component';
import { LoginComponent } from './login/login.component';
import { HotelsMainPageComponent } from './hotels-main-page/hotels-main-page.component';
import { HotelPageComponent } from './hotel-page/hotel-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { OfferComponent } from './offer/offer.component';

const routes: Routes = [
  {
    path : '',
    component : LoginComponent     
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
    component : HotelsPanelComponent
  },
  {
    path : 'offerpage',
    component : OfferComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
