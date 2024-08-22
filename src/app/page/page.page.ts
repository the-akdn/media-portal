import { Component, inject, OnInit, signal } from '@angular/core';
import { PagesService } from '../services/pages.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.page.html',
  styleUrls: ['./page.page.scss'],
})
export class pagePage  {

  private pagesSrv = inject(PagesService);
  public page=signal< any >(undefined);  
  public pageButtons:any;
  public pageNumber: any = 0;

  constructor( private route: ActivatedRoute) {
    this.route.url.subscribe(params => {
      this.pageNumber = params[0].path ?? 0;
      if (this.pageNumber == 'terms') this.pageNumber = 10;
      if (this.pageNumber == 'privacy-policy') this.pageNumber = 11;
      this.getPage();
    })
   }

   getPage()  {   
    this.pagesSrv.pages$.subscribe(res=>{
      res.filter((data: any)=>{
        if (data.id == this.pageNumber) {
          this.page.set((data)?.attributes??"");
          this.pageButtons = (data)?.attributes?.article_buttons?.data??"";     
        }
      });
    });
  }
  

}
