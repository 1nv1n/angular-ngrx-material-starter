import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioComponent } from './bio/bio.component';

const routes: Routes = [
  {
    path: '',
    component: BioComponent,
    data: { title: 'Bio' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BioRoutingModule {}
