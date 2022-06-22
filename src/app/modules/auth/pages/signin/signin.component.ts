import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { catchError, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit, OnDestroy {
  hide = true;
  isLoading: boolean = false;
  ngUnsubscribe$ = new Subject();

  signinForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router) {}
  
  ngOnInit(): void {}
  
  ngOnDestroy(): void {
    this.ngUnsubscribe$.next(true);
    this.ngUnsubscribe$.complete();
  }

  signIn() {

  }

}
