import { Component, OnInit } from '@angular/core';
import { Post } from '../admin/model/Post';
import { PostsService } from '../admin/service/posts.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  post: Post = new Post();
  listPosts: Post[];

  constructor(
    private postsService: PostsService
  ) { 
    this.listPosts = [];
   }

  ngOnInit() {
    window.scroll(0, 0)
    this.findAllPosts()
  }

  findAllPosts() {
    this.postsService.getAllPosts().subscribe((resp: Post[]) => {
      this.listPosts = resp
    })
  }

}
