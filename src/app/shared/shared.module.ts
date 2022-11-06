import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { SkillsComponent } from './components/skills/skills.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ProjectsComponent } from './components/projects/projects.component';

//primeComponents
import { FormsModule } from '@angular/forms';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { ReactiveFormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';


import lottie from 'lottie-web';
import { defineLordIconElement } from 'lord-icon-element';

@NgModule({
  declarations: [
    SkillsComponent,
    ProfileInfoComponent,
    ContactMeComponent,
    PerfilComponent,
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    DataViewModule,
    FormsModule,
    ButtonModule,
    VirtualScrollerModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
    DialogModule
  ],
  exports: [
    SkillsComponent,
    ProfileInfoComponent,
    ContactMeComponent,
    PerfilComponent,
    ProjectsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
  constructor() {
    defineLordIconElement(lottie.loadAnimation)
  }
}
