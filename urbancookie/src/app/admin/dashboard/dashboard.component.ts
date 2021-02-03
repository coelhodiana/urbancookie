import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/posts.service';

import { Post } from '../model/post';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  post: Post = new Post()
  listPosts: Post[]

  constructor(private postsService: PostsService) {
    this.listPosts = [];
   }

  ngOnInit() {
    this.findAllPosts()
  }

  findAllPosts() {
    this.postsService.getAllPosts().subscribe((resp: Post[]) => {
      this.listPosts = resp
    })
  }

}
