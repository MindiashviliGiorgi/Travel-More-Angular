import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { HotelsPanelComponent } from './hotels-panel/hotels-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HotelsMainPageComponent } from './hotels-main-page/hotels-main-page.component';
import { HotelPageComponent } from './hotel-page/hotel-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CarouselComponent } from './carousel/carousel.component';
import { OfferComponent } from './offer/offer.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './environments/environment.prod';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    AdminHeaderComponent,
    HotelsPanelComponent,
    LoginComponent,
    FooterComponent,
    HotelsMainPageComponent,
    HotelPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    CarouselComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(environment.apiBaseUrl)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
