import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventory-app';
  product: Product;

  constructor() {
    let newProduct = new Product('Nicehat', 'A Nice Black Hat',
    '/resources/images/products/black-hat.jpg',
    ['Men', 'Accessories', 'Hats'],
    29.99);
    this.product = newProduct;
  }
}
