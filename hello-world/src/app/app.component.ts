import { Component } from '@angular/core';
import { FavoriteChangeEventData } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';

  post = {
    title: 'Title',
    isFavorite: true
  }

  onFavoriteChange(eventData: FavoriteChangeEventData) {
    console.log("Favorite changed", eventData);
  }
}
