import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryModule } from '@ngx-gallery/core';

import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { BuildsComponent } from './builds/builds.component';
import { Build2012Component } from './build2012/build2012.component';
import { Build2014Component } from './build2014/build2014.component';
import { Build2016Component } from './build2016/build2016.component';
import { BuildsRoutingModule } from './builds-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    BuildsComponent,
    Build2012Component,
    Build2014Component,
    Build2016Component
  ],
  imports: [CommonModule, SharedModule, BuildsRoutingModule, GalleryModule]
})
export class BuildsModule {}
