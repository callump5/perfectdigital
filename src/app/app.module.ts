import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SlideshowModule } from 'ng-simple-slideshow';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { PhotoGiftsComponent } from './photo-gifts/photo-gifts.component';
import { StudioServicesComponent } from './studio-services/studio-services.component';
import { PhotoPrintingComponent } from './photo-printing/photo-printing.component';
import { OtherServicesComponent } from './other-services/other-services.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    HomeComponent,
    PhotoGiftsComponent,
    StudioServicesComponent,
    PhotoPrintingComponent,
    OtherServicesComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
