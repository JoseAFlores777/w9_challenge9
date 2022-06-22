import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor() { }

  ngOnInit(): void {
  }

}
