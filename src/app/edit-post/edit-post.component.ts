import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _postService: PostService
  ) {}
  blogPost: BlogPost;
  tags: String;

  ngOnInit(): void {
    this._postService
      .getPostbyId(this.activatedRoute.snapshot.params['id'])
      .subscribe((data) => {
        this.blogPost = data;
        this.tags = this.blogPost.tags.toString();
      });
  }

  formSubmit(): void {
    this.blogPost.tags = this.tags.split(',').map((tag) => tag.trim());
    this._postService
      .updatePostById(this.blogPost._id, this.blogPost)
      .subscribe(() => this.router.navigate(['admin']));
  }

  deltePost(): void {
    this._postService
      .deletePostById(this.blogPost._id)
      .subscribe(() => this.router.navigate(['admin']));
  }
}
