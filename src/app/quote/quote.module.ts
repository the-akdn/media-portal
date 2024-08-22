import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { QuotePageRoutingModule } from './quotel-routing.module';
import { QuotePage } from './quote.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuotePageRoutingModule,
    SharedModule
  ],
  declarations: [QuotePage]
})
export class QuotePageModule {}
