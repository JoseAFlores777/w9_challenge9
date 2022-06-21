import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { E404Component } from './components/errors/e404/e404.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    E404Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
