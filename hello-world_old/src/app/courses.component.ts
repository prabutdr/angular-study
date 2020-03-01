import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ title }}</h2>
    <h2 [textContent]='title'></h2>
    <!-- Property binding (DOM) -->
    <img [src]='imageUrl'/>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
    <table border=1>
      <tr>
        <!-- Attribute binding (HTML) -->
        <td [attr.colspan]='colSpan'>test</td>
      </tr>
      <tr>
        <td>C1</td>
        <td>C2</td>
      </tr>
    </table>
    <input #email (keyup.enter)="onKeyUp($event, email.value)"/>
    <input [(ngModel)]="firstName" (keyup.enter)="onFirstNameEntered()"/>
    <div (click)="onDivClick()">
      <button (click)="onSave($event)" class='btn btn-primary' [class.active]='isActive'>Submit</button>
    </div>
    <button class='btn btn-primary' [style.backgroundColor]='isActive ? "green": "red"'>Reset</button>
    <div>
      {{ course.title | uppercase | lowercase }} <br/>
      {{ course.students | number }} <br/>
      {{ course.rating | number:'1.2-2' }} <br/>
      {{ course.price | currency:'AUD':false:'3.2-2' }} <br/>
      {{ course.releaseDate | date:'shortDate'}} <br/>
    </div>
    <h3>summary</h3>
    <div>{{ text | summary: 15 }}</div>
  `
})
export class CoursesComponent {
  title = "List of Courses";
  imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSFKNqEgnMwkLKJq1fIqU426ldbaGnystXF6C6__4BVr0ea-9P";
  colSpan = 2;
  isActive = true;
  courses;
  firstName = 'Raj';
  course = {
    title: 'The Complete Angular Course',
    rating: 4.9745,
    students: 30123,
    price: 190.9534,
    releaseDate: new Date(2016, 3, 1)
  };
  text = 'A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.';
  
  constructor(service: CoursesService) {
    // let service = new CoursesService();
    this.courses = service.getCourses();
  }

  onSave($event: Event) {
    $event.stopPropagation(); // to stop event bubbling
    console.log("Submit button was clicked.", $event);
  }

  onDivClick() {
    console.log("Div for submit button clicked.");
  }

  onKeyUp($event: Event, value: string) {
    console.log("ENTER was pressed.", $event.target, value);
  }
  
  onFirstNameEntered() {
    console.log('First name entered', this.firstName);
  } 
}