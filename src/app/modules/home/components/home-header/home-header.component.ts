import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {
  @Output('onToogleSidenav') onToogleSidenav = new EventEmitter<boolean>();

  isOpen: boolean = false;
  isOpenProfileInfo: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toogle() {
    this.isOpen = !this.isOpen;
    this.onToogleSidenav.emit(this.isOpen);
  }

  logout() {}
}
