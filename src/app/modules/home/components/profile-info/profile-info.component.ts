import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {

  _sessionUser = {
    name: 'jose',
    email:'adfasd@asda.com'
  }

  constructor() { }

  ngOnInit(): void {
  }

  logout() {
    
  }

}
