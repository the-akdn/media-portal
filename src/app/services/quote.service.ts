import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class QuoteService extends DataService {
 
  constructor(http: HttpClient) {
    super(http);
  }

  public getQuotes()  {
    return this.http.get< any >(this.url+"quotes?populate=*&sort[0]=Date:desc");
  }

}
