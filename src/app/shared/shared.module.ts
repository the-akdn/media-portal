
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MarkedToHtmlPipe } from './marked-to-html.pipe';
import { PhotoFilterPipe } from './photo-filter';
import { VideoFilterPipe } from './video-filter';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
    ],
    declarations: [
        HeaderComponent, 
        FooterComponent,
        MarkedToHtmlPipe,
        PhotoFilterPipe,
        VideoFilterPipe
    ],
  exports: [
        CommonModule, 
        FormsModule, 
        HeaderComponent, 
        FooterComponent, 
        MarkedToHtmlPipe, 
        PhotoFilterPipe,
        VideoFilterPipe
    ]
})
export class SharedModule {}
