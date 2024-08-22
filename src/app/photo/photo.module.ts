import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { PhotoComponent } from './photo.component';

@NgModule({
  imports: [ CommonModule, IonicModule, RouterModule],
  declarations: [PhotoComponent],
  exports: [PhotoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PhotoComponentModule {}
