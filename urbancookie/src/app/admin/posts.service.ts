import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts = [];

  constructor() { }

  addToPosts(post: any) {
    const result: string[] = [];
    result.push(post);
  }

  getposts() {
    return this.posts;
  }
}
