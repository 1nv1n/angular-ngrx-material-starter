import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';

import { routeAnimations } from '../../../core/core.module';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

@Component({
  selector: 'nvn-build-2012',
  templateUrl: './build2012.component.html',
  styleUrls: ['./build2012.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routeAnimations]
})
export class Build2012Component implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  images2012: GalleryItem[];

  constructor() {}

  ngOnInit() {
    this.images2012 = [
      new ImageItem({
        src: './assets/img/gallery/2012/preview_l/1.jpg',
        thumb: './assets/img/gallery/2012/preview_s/1.jpg'
      }),
      new ImageItem({
        src: './assets/img/gallery/2012/preview_l/2.jpg',
        thumb: './assets/img/gallery/2012/preview_s/2.jpg'
      })
    ];
  }
}
