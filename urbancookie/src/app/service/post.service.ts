import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
/* {
  providedIn: 'root'
}) */

export class PostService {

  API_URL = 'https://spreadsheets.google.com/feeds/cells/1yArnXpgx4KiAJ5lFEUk-aTauAYs6WvjDQWCNcRAqZ0Q/1/public/full?alt=json';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<any[]>(`${this.API_URL}`);
  }
  
}
