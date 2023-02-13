import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

const modules: any[] = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatTabsModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule { }
