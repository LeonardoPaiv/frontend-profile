import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

import lottie from 'lottie-web';
import { defineLordIconElement } from 'lord-icon-element';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule {
  constructor() {
    defineLordIconElement(lottie.loadAnimation)
  }
 }
