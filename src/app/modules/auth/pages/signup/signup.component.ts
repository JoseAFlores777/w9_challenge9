import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, pipe, Subject, takeUntil } from 'rxjs';
import { samePassword, strongPassword } from '../../../../core/validators/password.validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit, OnDestroy {
  hidePassword = true;
  hideConfirmPassword = true;
  isLoading: boolean = false;
  ngUnsubscribe$ = new Subject();	

  signupForm = this.fb.group(
    {
      firstName: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      lastName: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      username: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(7)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, strongPassword()]],
      confirmPassword: [null, Validators.required],
    },
    {
      validators: [samePassword('password', 'confirmPassword')],
    }
  );

  constructor(private fb: FormBuilder, private router: Router) {}
  
  ngOnInit(): void {}
  
  ngOnDestroy(): void {
    this.ngUnsubscribe$.next(true);
    this.ngUnsubscribe$.complete();
  }

  signUp() {
    this.signupForm.markAllAsTouched();
    if (!this.signupForm.valid) {
      return;
    }
    let name = this.signupForm.value['firstName'] + ' ' + this.signupForm.value['lastName'];
    let email = this.signupForm.value['email'];
    let password = this.signupForm.value['password'];
    let passwordConfirmation = this.signupForm.value['confirmPassword'];

    this.isLoading = true;

  }
}
