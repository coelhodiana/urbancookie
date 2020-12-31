import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-instafeed',
  templateUrl: './instafeed.component.html',
  styleUrls: ['./instafeed.component.scss']
})
export class InstafeedComponent implements OnInit {

  listPosts!: Object;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.get().subscribe(dados => {
      this.listPosts = dados.feed.entry;
      this.listPosts.shift()
      console.log(this.listPosts)
      /* console.log(this.listPosts.feed.entry[1]) */
    })
  }

}
