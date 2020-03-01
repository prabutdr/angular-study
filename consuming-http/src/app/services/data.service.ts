import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { catchError, map } from 'rxjs/operators';
import { BadInputError } from '../common/bad-request-error';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url)
      .pipe(
        map(response => response.json()),
        catchError(this.handleError));
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(
        catchError(this.handleError),
        map(response => response.json()));
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
    .pipe(
      map(response => response.json()),
      catchError(this.handleError));
}

  delete(id) {
    // return throwError(new AppError());
    return this.http.delete(this.url + '/' + id)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 404)
      return throwError(new NotFoundError());
    if (error.status === 400)
      return throwError(new BadInputError());

    return throwError(new AppError(error));
  }
}
