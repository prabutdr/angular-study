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

  courses = ['Course1', 'Course2', 'Course3', 'Course4'];

  viewMode = 'some';

  onFavoriteChange(eventData: FavoriteChangeEventData) {
    console.log("Favorite changed", eventData);
  }

  onAdd() {
    this.courses.push('Course 10');
  }

  onRemove(course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }  
}
