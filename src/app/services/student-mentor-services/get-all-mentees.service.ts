import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetAllMenteesService {
  url = 'http://localhost:3000/all-mentees';

  constructor(private http: HttpClient) {}

  all_mentees() {
    return this.http.get(this.url);
  }
}
