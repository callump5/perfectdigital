import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PhotoGiftsComponent } from './photo-gifts/photo-gifts.component';
import { PhotoPrintingComponent } from './photo-printing/photo-printing.component';
import { OtherServicesComponent } from './other-services/other-services.component';
import { StudioServicesComponent } from './studio-services/studio-services.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'photo-printing', component: PhotoPrintingComponent},
  {path: 'photo-gifts', component: PhotoGiftsComponent},
  {path: 'other-services', component: OtherServicesComponent},
  {path: 'studio-services', component: StudioServicesComponent},
  {path: 'how-to-find-us', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, PhotoPrintingComponent, PhotoGiftsComponent, StudioServicesComponent, OtherServicesComponent, ContactComponent];
