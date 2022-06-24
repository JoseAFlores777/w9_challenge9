import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { E404Component } from './components/errors/e404/e404.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { AuthService } from './authentication/services/auth.service';
import { LocalStorageService } from './services/local-storage.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiBaseUrlInterceptor } from './interceptors/apiBaseUrl/api-base-url.interceptor';
import { AuthGuard } from './authentication/guards/auth.guard';



@NgModule({
  declarations: [
    E404Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiBaseUrlInterceptor, multi: true } ,
    AuthService,
    LocalStorageService,
    AuthGuard
  ]
})
export class CoreModule { }
