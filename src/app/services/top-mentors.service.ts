import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TopMentorsService {
  baseUrl = 'http://localhost:3000/top-mentors';

  constructor(private http: HttpClient) {}

  getTopMentors() {
    return this.http.get(this.baseUrl);
  }
}
