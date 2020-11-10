import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import blogData from '../blogData.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  blogPosts: Array<BlogPost> = blogData;

  latestPosts: Array<BlogPost> = this.blogPosts.slice(0, 3);

  ngOnInit() {}
}
