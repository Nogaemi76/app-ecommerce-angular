import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { TopMenuComponent } from './components/top-menu/top-menu.component';

@NgModule({
  declarations: [
    TopMenuComponent
  ],
  imports: [
    MaterialModule
  ],
  exports: [
    TopMenuComponent
  ]
})
export class MenuModule { }
