import { Component, OnInit } from '@angular/core';
import { InstaUrlService } from '../service/insta-url.service';

import { InstaUrl } from '../model/InstaUrl.model';

@Component({
  selector: 'app-instafeed',
  templateUrl: './instafeed.component.html',
  styleUrls: ['./instafeed.component.scss']
})
export class InstafeedComponent implements OnInit {

  listUrls!: InstaUrl[];

  constructor(
    private instaUrlService: InstaUrlService
  ) {}

  ngOnInit() {
        this.getAllUrls()
  }

  getAllUrls() {
    this.instaUrlService.getAllUrls().subscribe((resp: any) => {
      this.listUrls = resp;
      console.log(this.listUrls)
    })
  }

}
