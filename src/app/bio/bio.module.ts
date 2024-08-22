import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { BioPageRoutingModule } from './bio-routing.module';
import { BioPage } from './bio.page';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    BioPageRoutingModule,
    SharedModule
  ],
  declarations: [BioPage, ] ,
})
export class BioPageModule {}
