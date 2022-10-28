import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { SkillsComponent } from './components/skills/skills.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { MenubarComponent } from './components/menubar/menubar.component';
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
import {SidebarModule} from 'primeng/sidebar';

@NgModule({
  declarations: [
    SkillsComponent,
    ProfileInfoComponent,
    ContactMeComponent,
    MenubarComponent,
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
    SidebarModule,
  ],
  exports: [
    SkillsComponent,
    ProfileInfoComponent,
    ContactMeComponent,
    MenubarComponent,
    PerfilComponent,
    ProjectsComponent
  ]
})
export class SharedModule { }
