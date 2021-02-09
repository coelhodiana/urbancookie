import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../model/Post';

import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.scss']
})
export class DeletePostComponent implements OnInit {

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
      this.post = resp
      console.log(this.post)
    })
  }

  deleteThisPost() {
    this.postsService.deletePost(this.idPost).subscribe(() => {
      alert('Publicação apagada com sucesso!')
      this.router.navigate(['/dashboard'])
    })
  }

}
