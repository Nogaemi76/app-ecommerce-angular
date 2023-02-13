import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

import { AboutComponent } from './components/about/about.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    HomeComponent,
    CoursesComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    MaterialModule,
  ]
})
export class CommonModule { }
