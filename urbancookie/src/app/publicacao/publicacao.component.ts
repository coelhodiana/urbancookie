import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../admin/model/Post';
import { PostsService } from '../admin/service/posts.service';

@Component({
  selector: 'app-publicacao',
  templateUrl: './publicacao.component.html',
  styleUrls: ['./publicacao.component.scss']
})
export class PublicacaoComponent implements OnInit {
  post: Post = new Post();
  idPost!: number;

  constructor( 
    private router: Router,
    private route: ActivatedRoute,
    private postsService: PostsService) { 
  }

  ngOnInit(){
    window.scroll(0, 0)
    this.idPost = this.route.snapshot.params['id']
    this.findByIdPost(this.idPost)
  }

  findByIdPost(id: number){
    this.postsService.getByIdPost(id).subscribe((resp: Post) => {
      this.post = resp
    })
  }

}
