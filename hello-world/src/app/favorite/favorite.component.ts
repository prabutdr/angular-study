import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  inputs: ['anotherInput'],
  // styles: [
  //   `

  //   `
  // ],
  // encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent {
  @Input('is-favorite') isFavorite: boolean;
  anotherInput;
  @Output() change = new EventEmitter();
  
  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({ isFavorite: this.isFavorite, message: 'Favorite changed' });
  }
}

export interface FavoriteChangeEventData {
  isFavorite: boolean,
  message: string
}
