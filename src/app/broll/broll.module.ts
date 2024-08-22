import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BrollPageRoutingModule } from './broll-routing.module';
import { BrollPage } from './broll.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrollPageRoutingModule,
    SharedModule
  ],
  declarations: [BrollPage]
})
export class BrollPageModule {}
