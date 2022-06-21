import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './pages/home-main/home-main.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';


@NgModule({
  declarations: [
    HomeMainComponent,
    HomeHeaderComponent,
    ProductListPageComponent,
    ProductDetailsPageComponent,
    CartPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
