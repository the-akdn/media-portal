import { Component, inject, OnInit, signal } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

import { PagesService } from '../services/pages.service';
import { MediaKitsService } from '../services/media.kits.service';
import { ActivatedRoute } from '@angular/router';

@Component({ 
  selector: 'app-broll',
  templateUrl: './broll.page.html',
  styleUrls: ['./broll.page.scss'],
})
export class BrollPage implements OnInit {

  private pagesSrv = inject(PagesService);
  public page=signal< any >(undefined);  
  public pageButtons:any;
  public staticText = this.pagesSrv.StaticText;

  private brollSrv = inject(MediaKitsService);
  public mediaBlocks:any;
  public videoBlocks:any;
  public countryList: any[]=[]
  public searchText: string = '';
  public searchCountry: any = null;
  
  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute) {
    this.searchCountry=this.route.snapshot.paramMap.get('country')??null; 
    this.getPage();
    this.getMediaBlock();
  }

  ngOnInit() { }
  
  videoURL(url:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  async getPage()  {   
    this.pagesSrv.pages$.subscribe(res=>{
      res.filter((data: any)=>{
        if (data.id == 9) {
          this.page.set((data)?.attributes??"");
          this.pageButtons = data?.attributes?.article_buttons?.data??"";     
        }
      });
    });
  }

  getMediaBlock()  {
    if ( !this.mediaBlocks) this.brollSrv.getMediaKits().subscribe({
      next: (resData) => {
        this.mediaBlocks=resData.data;
        this.getVideos();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  getVideos() {
    let arrVideo:any=[];
    this.mediaBlocks.forEach( (media:any) => {
      if (media.attributes.broll.length > 0) this.countryList.push({country:media?.attributes?.country?.data?.attributes?.country});
      media.attributes.broll.forEach( (video:any)=> {
        arrVideo.push(
          {
            id: video.id,
            title: video?.title??'',
            description: video?.description??'',
            country: media?.attributes?.country?.data?.attributes?.country??'',
            vimeo: video.vimeo??'',
            video720p: video.video720p?.data?.attributes?.url??'',
            video720pSize: video.video720p?.data?.attributes?.size??'',
            video1080p: video.video1080p?.data?.attributes?.url??'',
            video1080pSize: video.video1080p?.data?.attributes?.size??'',
            videoZip: video.videoZip?.data?.attributes?.url??'',
            videoZipSize: video.videoZip?.data?.attributes?.sie??'',
            orderBy: video?.order??0,
          }
        );
      });
    });

    this.videoBlocks=arrVideo.sort(function(a:any,b:any): any {
      if (a['orderBy'] > b['orderBy'] ) 
        return -1; 
      else 
        return b['orderBy'] - a['orderBy'];
    });
  }
}
