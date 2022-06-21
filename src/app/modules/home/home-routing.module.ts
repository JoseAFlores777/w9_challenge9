import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './pages/home-main/home-main.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeMainComponent,
    children: [
      {
        path: 'products',
        component: ProductListPageComponent
      },
      {
        path: 'product/:id',
        component: ProductDetailsPageComponent
      },
      {
        path: 'cart',
        component: CartPageComponent
      },
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
