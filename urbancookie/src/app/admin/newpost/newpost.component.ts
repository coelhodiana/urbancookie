import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Post } from '../model/Post';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})
export class NewpostComponent implements OnInit {
  post: Post = new Post()


  constructor(
    private postsService: PostsService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  addNewPost() {
    if (this.post.title == null) {
      console.log(this.post)
      alert('Preencha os campos')
    } else {
      this.postsService.postPosts(this.post).subscribe((resp: any = Post) => {
        this.post = resp
        this.post = new Post()
        console.log(this.post)
        alert('Publicado com sucesso!')
        this.router.navigate(["/dashboard"])
      })
    }
  }



}
