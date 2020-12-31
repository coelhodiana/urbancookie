import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-instafeed',
  templateUrl: './instafeed.component.html',
  styleUrls: ['./instafeed.component.scss']
})
export class InstafeedComponent implements OnInit {

  listPosts = [ {
    media_url: 'https://instagram.fcgh7-1.fna.fbcdn.net/v/t51.2885-15/e35/134983339_3446219118821846_9033769999171057043_n.jpg?_nc_ht=instagram.fcgh7-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=VlfNjocjo_4AX9JaIM5&tp=1&oh=5c145cb17cb1dd6589b598ca13d4d91e&oe=60188009', link: 'https://www.instagram.com/p/CJcHsROjCI5/'
  },
  {
    media_url: 'https://instagram.fcgh7-1.fna.fbcdn.net/v/t51.2885-15/e35/133320407_113804063852567_146089596831109613_n.jpg?_nc_ht=instagram.fcgh7-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=TVh8E9RE3rsAX8fGpDT&tp=1&oh=1c7116e01de586db9dda2c0a80c60b7d&oe=6014B137', link: 'https://www.instagram.com/p/CJWh7x4jpi9/'
  },
  {
    media_url: 'https://instagram.fcgh7-1.fna.fbcdn.net/v/t51.2885-15/e35/133666081_116335333665163_2083184581253045845_n.jpg?_nc_ht=instagram.fcgh7-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=Yk6l19VawxgAX9QIt7Y&tp=1&oh=661eac2aec9378cf64c69ce2fdd9e246&oe=60176D90', link: 'https://www.instagram.com/p/CJQ9uIAjdxG/'
  },
  {
    media_url: 'https://instagram.fcgh7-1.fna.fbcdn.net/v/t51.2885-15/e35/132407762_303478024389803_6251076670087000239_n.jpg?_nc_ht=instagram.fcgh7-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=Xn0MWe0GkusAX_MkygW&tp=1&oh=6c08d7c40a50fcc07b47e6669e877c78&oe=5FEF284D', link: 'https://www.instagram.com/p/CJM412GjhAt/'
  },
  {
    media_url: 'https://instagram.fcgh7-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/130136050_2375258605952744_4722464016680736233_n.jpg?_nc_ht=instagram.fcgh7-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=r2sLEkP3Eb0AX-IwLsO&tp=1&oh=2512b23cb92dc3d3f4f287bcd8a3cf3c&oe=6014F869', link: 'https://www.instagram.com/p/CIlJSd1j_tm/'
  },
  {
    media_url: 'https://instagram.fcgh7-1.fna.fbcdn.net/v/t51.2885-15/e35/128393584_3962799047074743_5894634023450189897_n.jpg?_nc_ht=instagram.fcgh7-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=gjk6YXHrw88AX_3J0yJ&tp=1&oh=fcdac901621961267b6c563b075d8bc0&oe=60169DAE', link: 'https://www.instagram.com/p/CIRTHRzjYP1/'
  },
  {
    media_url: 'https://instagram.fcgh7-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/90435072_209170676834603_655214810252119473_n.jpg?_nc_ht=instagram.fcgh7-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=UicTIzm0Md8AX_29IJY&tp=1&oh=403a47dbfbabd1436ca42e29b72c279c&oe=6014E61F', link: 'https://www.instagram.com/p/B94X-gngwtB/'
  },
  {
    media_url: 'https://instagram.fcgh7-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/70021385_1475877059219168_7149051676680825603_n.jpg?_nc_ht=instagram.fcgh7-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=E9e76h33vHQAX9ZHC33&tp=1&oh=24d94ccf81ce05c0aad6262b392ad1fe&oe=6017910F', link: 'https://www.instagram.com/p/B3XX5AqnQht/'
  }
    
  ];

  constructor() {}

  ngOnInit() {
        
  }

/*   getAllPosts() {
    this.postService.get().subscribe(dados => {
      this.listPosts = dados.feed.entry;
      console.log(this.listPosts)
    })
  } */

}
