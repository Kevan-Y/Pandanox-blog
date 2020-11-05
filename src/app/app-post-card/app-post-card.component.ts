import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-app-post-card',
  templateUrl: './app-post-card.component.html',
  styleUrls: ['./app-post-card.component.css'],
})
export class AppPostCardComponent implements OnInit {
  constructor() {}
  @Input() post: BlogPost;

  ngOnInit(): void {}
}
