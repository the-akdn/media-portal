import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrollPage } from './broll.page';

const routes: Routes = [
  {
    path: '', component: BrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrollPageRoutingModule {}
