import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthMainComponent } from './pages/auth-main/auth-main.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: AuthMainComponent,
    children: [
      {
        path: 'signin',
        component:SigninComponent
      },
      {
        path: 'signup',
        component:SignupComponent
      },
      {
        path: '',
        redirectTo: 'signin',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
