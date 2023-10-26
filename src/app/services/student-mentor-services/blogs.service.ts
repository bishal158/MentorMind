import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  baseurl = 'http://localhost:3000/blogs';

  constructor(private http: HttpClient) {}

  save_blogs(blog: any) {
    return this.http.post(this.baseurl, blog);
  }

  get_your_blogs() {
    return this.http.get(this.baseurl);
  }

  delete_blogs(blog_id: string) {
    return this.http.delete(`${this.baseurl}/${blog_id}`);
  }
}
