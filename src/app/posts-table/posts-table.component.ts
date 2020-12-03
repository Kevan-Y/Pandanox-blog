import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.css'],
})
export class PostsTableComponent implements OnInit {
  constructor(private _postsService: PostService, private route: Router) {}
  blogPosts: Array<BlogPost> = [];

  ngOnInit(): void {
    this._postsService
      .getAllPosts()
      .subscribe((data) => (this.blogPosts = data));
  }
  rowClicked(e, id) {
    this.route.navigate(['/admin/post', id]);
  }
}
