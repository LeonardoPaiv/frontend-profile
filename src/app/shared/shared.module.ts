import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfileHomeComponent } from './components/profile-home/profile-home.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';

//primeComponents
import { FormsModule } from '@angular/forms';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    SidebarComponent,
    ProfileHomeComponent,
    ContactMeComponent,
  ],
  imports: [
    CommonModule,
    DataViewModule,
    FormsModule,
    ButtonModule,
    VirtualScrollerModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule
  ],
  exports: [
    SidebarComponent,
    ProfileHomeComponent,
    ContactMeComponent
  ]
})
export class SharedModule { }
