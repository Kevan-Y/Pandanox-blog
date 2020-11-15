import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BlogPost } from './BlogPost';

const perPage: number = 6;
@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(page, tag, category): Observable<BlogPost[]> {
    let myURLString: string = `https://web422-blogs-api.herokuapp.com/api/posts?page=${page}&perPage=${perPage}`;
    if (tag) myURLString += `&tag=${tag}`;
    if (category) myURLString += `&category=${category}`;
    return this.http.get<BlogPost[]>(myURLString);
  }

  getPostbyId(id): Observable<BlogPost> {
    return this.http.get<BlogPost>(
      `https://web422-blogs-api.herokuapp.com/api/posts/${id}`
    );
  }

  getCategories(): Observable<any> {
    return this.http.get<any>(
      `https://web422-blogs-api.herokuapp.com/api/categories`
    );
  }

  getTags(): Observable<string[]> {
    return this.http.get<string[]>(
      `https://web422-blogs-api.herokuapp.com/api/tags`
    );
  }
}
