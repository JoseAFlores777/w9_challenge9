import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LocalStorageService } from '../../../../core/services/local-storage.service';
import * as fromauthReducer from '../../../auth/store/auth.reducer';
import { signOutUser } from '../../../auth/store/actions/sessionUser.actions';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {
  @Output('onToogleSidenav') onToogleSidenav = new EventEmitter<boolean>();

  isOpen: boolean = false;
  isOpenProfileInfo: boolean = false;

  constructor(private router: Router,
    private localStorageService: LocalStorageService,

  ) { }

  ngOnInit(): void {}

  toogle() {
    this.isOpen = !this.isOpen;
    this.onToogleSidenav.emit(this.isOpen);
  }

  logout() {
    this.localStorageService.remove('token');
    this.router.navigateByUrl('/auth/signin');
  }
}
