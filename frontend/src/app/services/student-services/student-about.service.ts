import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentAboutService {
  url = 'http://localhost:3000/student/1';

  constructor(private http: HttpClient) {}

  students() {
    return this.http.get(this.url);
  }
}
