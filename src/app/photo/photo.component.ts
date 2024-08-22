import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { PagesService } from '../services/pages.service';
register();

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoComponent implements OnInit {
    
  private pagesSrv = inject(PagesService);
  public staticText = this.pagesSrv.StaticText;

  id: any;
  data: any;

  ngOnInit() {
  }

  openImage(id:number) {
    this.id=id;
  }

}
