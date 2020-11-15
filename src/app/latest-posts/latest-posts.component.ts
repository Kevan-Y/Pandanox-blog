import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post.service';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css'],
})
export class LatestPostsComponent implements OnInit {
  constructor(private _postService: PostService) {}

  posts: Array<BlogPost>;

  ngOnInit(): void {
    this._postService
      .getPosts(1, null, null)
      .subscribe((data) => (this.posts = data.slice(0, 3)));
  }
}
