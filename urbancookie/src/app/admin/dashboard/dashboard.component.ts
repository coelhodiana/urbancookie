import { Component, OnInit } from '@angular/core';
import { posts } from '../posts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  posts = posts;

  constructor() { }

  ngOnInit(): void {
  }

}
