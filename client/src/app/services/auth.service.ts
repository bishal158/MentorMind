import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost:5000/';
  constructor(private http: HttpClient) {}

  // admin api
  save_admin(user: any) {
    return this.http.post(this.baseUrl + 'admin/register', user);
  }
}
