import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { LoginButtonComponent } from './components/buttons/login-button/login-button.component';
import { LogoutButtonComponent } from './components/buttons/logout-button/logout-button.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginButtonComponent,
    LogoutButtonComponent
  ],
  imports: [
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    LoginButtonComponent,
    LogoutButtonComponent
  ]
})
export class SharedModule { }
