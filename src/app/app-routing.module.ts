import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsPanelComponent } from './hotels-panel/hotels-panel.component';
import { LoginComponent } from './login/login.component';
import { HotelsMainPageComponent } from './hotels-main-page/hotels-main-page.component';
import { HotelPageComponent } from './hotel-page/hotel-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  {
    path : '',
    component : HotelsMainPageComponent     
  },
  {
    path : 'loginSystem',
    component : LoginComponent
  },
  {
    path : 'admin',
    component : HotelsPanelComponent
  },
  {
    path : 'hotelpage',
    component : HotelPageComponent
  },
  {
    path : 'aboutpage',
    component : AboutPageComponent
  },
  {
    path : 'contactpage',
    component : ContactPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
