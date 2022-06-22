import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbsComponent } from './components/bread-crumbs/bread-crumbs.component';



@NgModule({
  declarations: [
    BreadCrumbsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BreadCrumbsComponent
  ]
})
export class SharedModule { }
