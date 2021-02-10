import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/posts.service';

import { Post } from '../model/Post';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  post: Post = new Post()
  listPosts: Post[]

  constructor(
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute
    ) {
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
