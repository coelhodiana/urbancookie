import { Component, OnInit } from '@angular/core';

import { posts } from '../posts';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})
export class NewpostComponent implements OnInit {
  post;

  constructor() { }

  ngOnInit(): void {
  }

  addNewPost() {

  }

  /* 
    addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  */

}
