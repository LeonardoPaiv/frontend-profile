import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';

import lottie from 'lottie-web';
import { defineLordIconElement } from 'lord-icon-element';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {InputTextareaModule} from 'primeng/inputtextarea';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    FormsModule,
    InputTextareaModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule {
  constructor() {
    defineLordIconElement(lottie.loadAnimation)
  }
 }
