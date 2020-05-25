import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryModule } from '@ngx-gallery/core';

import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { BuildsComponent } from './builds/builds.component';
import { Build820Component } from './build820/build820.component';
import { BuildP5Component } from './buildp5/buildp5.component';
import { BuildsRoutingModule } from './builds-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    BuildsComponent,
    Build820Component,
    BuildP5Component
  ],
  imports: [CommonModule, SharedModule, BuildsRoutingModule, GalleryModule]
})
export class BuildsModule {}
