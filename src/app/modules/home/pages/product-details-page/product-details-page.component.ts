import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  value: string;
  detail: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {detail: "id", value: 'Hydrogen'},
  {detail: "sku", value: 'Hydrogen'},
  {detail: "price", value: 'Hydrogen'},
  {detail: "promotional_price", value: 'Hydrogen'},
  {detail: "stock", value: 'Hydrogen'},
  {detail: "weight", value: 'Hydrogen'},
  {detail: "height", value: 'Hydrogen'},
  {detail: "width", value: 'Hydrogen'},
  {detail: "depth", value: 'Hydrogen'},

];



@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {

  displayedColumns: string[] = ['detail', 'value'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}


