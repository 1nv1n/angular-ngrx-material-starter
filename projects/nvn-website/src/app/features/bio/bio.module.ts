import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { BioComponent } from './bio/bio.component';
import { BioRoutingModule } from './bio-routing.module';

@NgModule({
  declarations: [BioComponent],
  imports: [CommonModule, SharedModule, BioRoutingModule]
})
export class BioModule {}
