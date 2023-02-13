import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { TopMenuComponent } from './components/top-menu/top-menu.component';

@NgModule({
  declarations: [
    TopMenuComponent
  ],
  imports: [
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    TopMenuComponent
  ]
})
export class MenuModule { }
