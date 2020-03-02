import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/bad-request-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private service: PostService) { 
  }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.posts.unshift(post);

    input.value = '';
    
    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id;
          console.log(newPost);
        }, 
        (error: AppError) => {
          const index = this.posts.indexOf(post);
          this.posts.splice(index, 1);

          if (error instanceof BadInputError) {
            // this.form.setErrors(error.originalError);
          } else {
            throw error;
          }
        });
  }

  updatePost(post: any) {
    this.service.update(post)
      .subscribe(
        response => {
          console.log(response);
        }/*, 
        error => {
          console.log(error);
          alert('An unexpected error occurred.');
        }*/);
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(
        response => {
          console.log(response);
        }, 
        (error: AppError) => {
          this.posts.splice(index, 0, post);

          if (error instanceof NotFoundError)
            alert('This post has already been deleted.');
          else {
            // console.log(error);
            // alert('An unexpected error occurred.');
            throw error;
          }
        });
  }
}
