import { Component, inject, OnInit, signal } from '@angular/core';
import { PagesService } from '../services/pages.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.page.html',
  styleUrls: ['./bio.page.scss'],
})
export class BioPage {

  private pagesSrv = inject(PagesService);
  public homePage=signal< any >(undefined);
  public pageButtons:any;

  constructor() {
    this.getPage();
   }

  getPage()  {   
    this.pagesSrv.pages$.subscribe(res=>{
      res.filter((data: any)=>{
        if (data.id == 7) {
          this.homePage.set((data)?.attributes??"");
          this.pageButtons = (data)?.attributes?.article_buttons?.data??"";     
        }
      });
    });
  }
  
}
