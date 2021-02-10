import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../model/Post';

import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  post: Post = new Post();
  idPost!: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.idPost = this.route.snapshot.params['id']
    this.findByIdPost(this.idPost)
  }

  findByIdPost(id: number){
    this.postsService.getByIdPost(id).subscribe((resp: Post) => {
      this.post = resp;
    })
  }

  saveEditedPost() {
    this.postsService.putPost(this.post).subscribe((resp: Post) => {
      this.post = resp;
      alert('Publicação atualizada.')
      this.router.navigate(['/dashboard'])
    })
  }

}
