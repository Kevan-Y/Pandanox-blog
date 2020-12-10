import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css'],
})
export class PostDataComponent implements OnInit {
  constructor(
    private _postService: PostService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}
  querySub: any;
  post: BlogPost;
  commentName: string;
  commentText: string;
  mydate: string;
  ngOnInit(): void {
    this.querySub = this.activatedRoute.params.subscribe((params) => {
      this._postService.getPostbyId(params['id']).subscribe((data) => {
        this.post = data;
        this.post.views++;
        this._postService.updatePostById(this.post._id, this.post).subscribe();
      });
    });
  }
  submitComment(): void {
    this.post.comments.push({
      author: this.commentName,
      comment: this.commentText,
      date: new Date(),
    });

    this._postService.updatePostById(this.post._id, this.post).subscribe(() => {
      this.commentName = '';
      this.commentText = '';
    });
  }
  ngOnDestroy(): void {
    if (this.querySub) this.querySub.unsubscribe();
  }
}
