import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { InstaUrl } from '../model/InstaUrl.model';

@Injectable({
  providedIn: 'root'
})
export class InstaUrlService {

  public instaUrl!: InstaUrl;

  constructor(private http: HttpClient) { }

  getAllUrls() {
    return this.http.get<any>('https://spreadsheets.google.com/feeds/cells/1yArnXpgx4KiAJ5lFEUk-aTauAYs6WvjDQWCNcRAqZ0Q/2/public/full?alt=json')
  }
}
