import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/pages/components/about/about.component';
import { CoursesComponent } from './modules/pages/components/courses/courses.component';
import { HomeComponent } from './modules/pages/components/home/home.component';
import { AdminCoursesComponent } from './modules/admin/components/admin-courses/admin-courses.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'courses', component: CoursesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin-courses', component: AdminCoursesComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
