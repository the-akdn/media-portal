import { Component, inject, signal } from '@angular/core';

import { PagesService } from '../services/pages.service';
import { MediaKitsService } from '../services/media.kits.service';
import { ReleaseService } from '../services/release.service';
import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private pagesSrv = inject(PagesService);
  private mediaSrv = inject(MediaKitsService);
  private releaseSrv = inject(ReleaseService);
  private quoteSrv = inject(QuoteService);
  public homePage=signal< any >(undefined);
  public mediaBlocks:any;
  public pressReleases: any;
  public pageButtons: any;
  public quoteBlocks:any;
  public staticText = this.pagesSrv.StaticText;
  
  pages=null;
  
  constructor() {  
    this.getHomePage();
    this.getMediaBlock();
    this.getRelease();
  }

  getRelease() {
    if ( !this.pressReleases) this.releaseSrv.getPressRelease().subscribe({
      next: (resData) => {
        this.pressReleases=resData.data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  getHomePage() {   
    this.pagesSrv.pages$.subscribe(res=>{
      res.filter((data: any)=>{
        if (data.id == 6) {
          this.homePage.set((data)?.attributes??"");
          this.pageButtons = data?.attributes?.article_buttons?.data??"";     
        }
      });
    });
  }

  getMediaBlock()  {
    if ( !this.mediaBlocks) this.mediaSrv.getMediaKits().subscribe({
      next: (resData) => {
        this.mediaBlocks=resData.data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
