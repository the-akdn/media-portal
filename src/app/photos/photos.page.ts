import { Component, inject, OnInit, signal } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { PagesService } from '../services/pages.service';
import { MediaKitsService } from '../services/media.kits.service';
import { PhotoComponent } from '../photo/photo.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {

  private pagesSrv = inject(PagesService);
  public page=signal< any >(undefined);  
  public pageButtons:any;
  public staticText = this.pagesSrv.StaticText;

  private brollSrv = inject(MediaKitsService);
  public mediaBlocks:any;
  public photoBlocks:any[]=[];
  public countryList: any[]=[];

  public pages: any;
  public searchText: string = '';
  public searchCountry: any = null;
  
  constructor(private modalCtrl: ModalController, private route: ActivatedRoute) {
    this.searchCountry=this.route.snapshot.paramMap.get('country')??null; 
    this.getPage();
    this.getMediaBlock();
   }

  ngOnInit() {
  }

  async openModal(id: any) {
    const modal = await this.modalCtrl.create({
      component: PhotoComponent,
      componentProps: { 
        id: id,
        data: this.photoBlocks
      },
      cssClass: '.custom-modal'
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
  }

  async getPage()  {   
    this.pagesSrv.pages$.subscribe(res=>{
      res.filter((data: any)=>{
        if (data.id == 8) {
          this.page.set((data)?.attributes??"");
          this.pageButtons = (data)?.attributes?.article_buttons?.data??"";     
        }
      });
    });
  }

  getMediaBlock()  {
    if ( !this.mediaBlocks) this.brollSrv.getMediaKits().subscribe({
      next: (resData) => {
        this.mediaBlocks=resData.data;
        this.getPhotos();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  getPhotos() {
    let arrPhoto:any=[];
    this.mediaBlocks.forEach( (media:any) => {
      if (media.attributes.photographs.length > 0) this.countryList.push({country:media.attributes.country.data.attributes.country});
      media.attributes.photographs.forEach( (photo:any)=> {
        arrPhoto.push(
          {
            id: photo.id,
            country: media.attributes?.country?.data?.attributes?.country??'',
            description: photo?.description??'',
            photo: photo.photo?.data?.attributes?.url??'',
            photoBy: photo?.photoBy??'',
            jpgFormat: photo.jpgFormat?.data?.attributes?.url??'',
            jpgFormatSize: photo.jpgFormat?.data?.attributes?.size??'',
            pngFormat: photo.pngFormat?.data?.attributes?.url??'',
            pngFormatSize: photo.pngFormat?.data?.attributes?.size??'',
            zipFormat: photo.zipFormat?.data?.attributes?.url??'',
            zipFormatSize: photo.zipFormat?.data?.attributes?.size??'',
            orderBy: photo?.order??0,
          }
        );
      });
    });

    this.photoBlocks=arrPhoto.sort(function(a:any,b:any): any {
      if (a['orderBy'] > b['orderBy'] ) 
        return -1; 
      else 
        return b['orderBy'] - a['orderBy'];
    });
  }

}
