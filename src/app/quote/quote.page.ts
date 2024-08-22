import { Component, inject, signal } from '@angular/core';

import { PagesService } from '../services/pages.service';
import { QuoteService } from '../services/quote.service';

@Component({ 
  selector: 'app-quote',
  templateUrl: './quote.page.html',
  styleUrls: ['./quote.page.scss'],
})
export class QuotePage {

  private pagesSrv = inject(PagesService);
  public page=signal< any >(undefined);  
  public pageButtons:any;
  public staticText = this.pagesSrv.StaticText;

  public quoteSrv = inject(QuoteService);
  public quoteBlocks:any;
  public personList: any[]=[]
  
  constructor() {
    this.getPage();
    this.getQuotes();
  }

  getPage()  {   
    this.pagesSrv.pages$.subscribe(res=>{
      res.filter((data: any)=>{
        if (data.id == 13) {
          this.page.set((data)?.attributes??"");
          this.pageButtons = (data)?.attributes?.article_buttons?.data??"";     
        }
      });
    });
  }

  getQuotes()  {
    if ( !this.quoteBlocks) this.quoteSrv.getQuotes().subscribe({
      next: (resData) => {
        console.log(resData);
        this.quoteBlocks=resData.data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  getPerson()  {
    if ( !this.page()) this.quoteSrv.getPersons().subscribe({
      next: (resData) => {
        this.personList=resData.data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
 
}
