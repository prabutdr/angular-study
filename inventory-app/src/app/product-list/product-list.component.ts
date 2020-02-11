import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() productList: Product[];

  @Output() onProductSelected: EventEmitter<Product>;

  private currentProduct: Product;

  constructor() { 
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
  }

}
