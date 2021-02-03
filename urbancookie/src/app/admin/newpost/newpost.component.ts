import { Component, OnInit } from '@angular/core';

import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})
export class NewpostComponent implements OnInit {


  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
    
  }

  addNewPost() {
    
  }

}
