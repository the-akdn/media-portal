import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as staticTxt from '../data/staticText.json'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public url:string='';
  public httpOptions = {};
  public StaticText:any;
  
  constructor(public http: HttpClient) {
    this.StaticText= (staticTxt as any).default.en_US; 
    this.url=(staticTxt as any).default.config.strapi;
  }

  private setHttpOptions () {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
    };   
  }  

//General 
  public getAll(url:string ) {
    return this.http.get(this.url, this.httpOptions);
  }

  public get(type:string, id:string) {
    return this.http.post(this.url+type+'/'+id, this.httpOptions);
  }

  public getPersons()  {
    return this.http.get< any >(this.url+"person?populate=*" );
  }
  
}