import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
