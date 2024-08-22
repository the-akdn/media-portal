import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagesService extends DataService  {

  public pages$= new BehaviorSubject<any>([]);
  
  constructor(http: HttpClient) {
    super(http);
    this.getPages();
  }

  public getPages()  {
    //return this.http.get< any >(this.url+"articles?populate[photo][populate]=true&populate[photo][fields][0]=url&populate[article_buttons][populate]=true");
    this.http.get< any >(this.url+"articles?populate[photo][populate]=true&populate[photo][fields][0]=url&populate[article_buttons][populate]=true").subscribe({
      next: (resData) => {
        this.pages$.next(resData.data);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  

}