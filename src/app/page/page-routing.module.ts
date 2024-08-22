import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { pagePage } from './page.page';

const routes: Routes = [
  {
    path: '',  component: pagePage
  }, 
  {
    path: 'terms',  component: pagePage
  },
  {
    path: 'privacy-policy', component: pagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagePageRoutingModule {}
