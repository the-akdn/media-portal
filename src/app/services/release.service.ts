import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class ReleaseService extends DataService {
 
  constructor(http: HttpClient) {
    super(http);
  }

  public getPressRelease()  {
    return this.http.get< any >(this.url+"press-releases?populate=*&sort[0]=releaseDate:desc" );
  }

}
