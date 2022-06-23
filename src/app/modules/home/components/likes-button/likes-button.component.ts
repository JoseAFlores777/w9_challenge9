import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes-button',
  templateUrl: './likes-button.component.html',
  styleUrls: ['./likes-button.component.scss']
})
export class LikesButtonComponent implements OnInit {

  @Input('productId') productId!: number;


  isLiked: any =null;

  constructor() { }

  ngOnInit(): void {
  }

  onLike() {
    this.isLiked = true;
  }

  onDislike() {
    this.isLiked = false;
  }

}
