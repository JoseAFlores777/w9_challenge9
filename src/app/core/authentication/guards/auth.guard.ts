import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../../services/local-storage.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private localStorageService:LocalStorageService, private router:Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.validation();
    
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.validation();
  }


  validation() {
    let  isTokenExist = this.localStorageService.get('token') ? true : false;
    if(!isTokenExist){
      this.router.navigate(['/auth/signin']);
    }
    return isTokenExist;
  }
}
