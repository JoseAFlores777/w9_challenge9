import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { Observable, Subject, takeUntil } from 'rxjs';
import { SessionUser } from 'src/app/core/models/sessionUser.model';
import { signinUser } from '../../store/actions/sessionUser.actions';
import * as fromauthReducer from '../../store/auth.reducer';
import { selectSessionUser } from '../../store/selectors';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit, OnDestroy,AfterViewChecked {
  hide = true;
  isLoading = false;
  ngUnsubscribe$ = new Subject();


  user!: SessionUser | null;
 

  signinForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  

  constructor(private fb: FormBuilder, private router: Router, private store: Store<fromauthReducer.AppState>) { }
  

  ngAfterViewChecked(): void {
    console.log('OnChanges');
  }
  
  ngOnInit(): void {

    this.store
      .pipe(
        select(selectSessionUser),
        takeUntil(this.ngUnsubscribe$))
      .subscribe((data) => { 
        this.user = data.user;
        this.isLoading = data.loading;

    });


  }
  
  ngOnDestroy(): void {
    this.ngUnsubscribe$.next(true);
    this.ngUnsubscribe$.complete();
  }

  signIn() {
    this.signinForm.markAllAsTouched();
    if(this.signinForm.invalid) {
      return;
    }


    this.store.dispatch(signinUser({ reqBody: this.signinForm.value }));


  }
  


}
