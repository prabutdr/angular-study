import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {
  constructor(http: Http) {
    super('http://jsonplaceholder.typicode.com/posts', http);
  }
}

// import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import { Observable } from 'rxjs';
// import { AppError } from '../common/app-error';
// import { NotFoundError } from '../common/not-found-error';
// import { catchError, map } from 'rxjs/operators';
// import { BadInputError } from '../common/bad-request-error';
// import { throwError } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class PostService {
//   private url = 'http://1jsonplaceholder.typicode.com/posts';

//   constructor(private http: Http) { }

//   getPosts() {
//     return this.http.get(this.url).pipe(
//       catchError(this.handleError)
//     );
//   }

//   createPost(post) {
//     return this.http.post(this.url, JSON.stringify(post)).pipe(
//       map(data => { 
//         console.log('Create post - ' + data);
//         return data; 
//       }),
//       catchError(this.handleError));
//   }

//   updatePost(post) {
//     return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
//   }

//   deletePost(id) {
//     return this.http.delete(this.url + '/' + id).pipe(
//       map(data => { 
//         console.log('Delete data - ' + data);
//         return data; 
//       }),
//       catchError(this.handleError));
//   }

//   private handleError(error: Response) {
//     if (error.status === 404)
//       return throwError(new NotFoundError());
//     if (error.status === 400)
//       return throwError(new BadInputError());

//     return throwError(new AppError(error));
//   }
// }
