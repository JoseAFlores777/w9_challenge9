import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from 'src/app/core/core.module';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { LikesButtonComponent } from './components/likes-button/likes-button.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { HomeRoutingModule } from './home-routing.module';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { HomeMainComponent } from './pages/home-main/home-main.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';


@NgModule({
  declarations: [
    HomeMainComponent,
    HomeHeaderComponent,
    ProductListPageComponent,
    ProductDetailsPageComponent,
    CartPageComponent,
    ProfileInfoComponent,
    CategoriesListComponent,
    ProductCardComponent,
    LikesButtonComponent,
    AddToCartComponent,

    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    FormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
