import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  admin_info,
  admin_login,
  admin_register,
} from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // admin api
  save_admin(user: any) {
    return this.http.post(admin_register, user);
  }
  login_admin(user: any) {
    return this.http.post(admin_login, user, {
      withCredentials: true,
    });
  }
  admin_info() {
    return this.http.get(admin_info, {
      withCredentials: true,
    });
  }
}
