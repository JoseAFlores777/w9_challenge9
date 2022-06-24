import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthMainComponent } from './pages/auth-main/auth-main.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CoreModule } from '../../core/core.module';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SessionUserEffectsArray } from './store/effects';



@NgModule({
  declarations: [
    AuthMainComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forFeature('sessionUser', authReducer),
    EffectsModule.forFeature(SessionUserEffectsArray),
    AuthRoutingModule
  ]
})
export class AuthModule { }
