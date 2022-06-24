import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, tap, catchError, Observable, of } from 'rxjs';
import { AuthService } from '../../../../core/authentication/services/auth.service';
import { sessionUserActions } from '../actions'
import { signinUser, signinUserError } from '../actions/sessionUser.actions';
import { LocalStorageService } from '../../../../core/services/local-storage.service';
import { Router } from "@angular/router";


@Injectable()
export class SessionUserEffects {
  constructor(
    private actions$: Actions,
      private authService: AuthService,
      private localStorageService: LocalStorageService,
      private router : Router
      
    ) { }
    

    signinUser$ = createEffect(
        () => this.actions$.pipe(
            ofType(sessionUserActions.signinUser),
            mergeMap(
                (action) => this.authService.signin(action.reqBody)
                .pipe(
                    map((resp) => {
                        this.localStorageService.set('token', resp.data);
                        this.router.navigate(['/']);
                        return sessionUserActions.signinUserSuccess({ resBody: resp })
                    }),
                    catchError(err => {
                        
                        return of(sessionUserActions.signinUserError({payload:err}));
                    })
                )
            )
        )
    )



}