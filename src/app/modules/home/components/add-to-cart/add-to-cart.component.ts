import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  @Input('productId') productId!: number;

  productQty = 0;

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.productQty++;
  }

  substract() { 
    if (this.productQty > 0) {
      this.productQty--;

    }
  }

}
