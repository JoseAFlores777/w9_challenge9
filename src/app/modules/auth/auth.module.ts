import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthMainComponent } from './pages/auth-main/auth-main.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CoreModule } from '../../core/core.module';


@NgModule({
  declarations: [
    AuthMainComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
