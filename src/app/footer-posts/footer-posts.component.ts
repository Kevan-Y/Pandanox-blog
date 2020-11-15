import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { BlogPost } from '../BlogPost';
@Component({
  selector: 'app-footer-posts',
  templateUrl: './footer-posts.component.html',
  styleUrls: ['./footer-posts.component.css'],
})
export class FooterPostsComponent implements OnInit {
  constructor(private _postService: PostService) {}
  posts: Array<BlogPost>;
  ngOnInit(): void {
    this._postService
      .getPosts(1, null, null)
      .subscribe((data) => (this.posts = data.slice(0, 3)));
  }
}
