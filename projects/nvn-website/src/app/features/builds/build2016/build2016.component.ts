import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';

import { routeAnimations } from '../../../core/core.module';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

@Component({
  selector: 'nvn-builds-2016',
  templateUrl: './build2016.component.html',
  styleUrls: ['./build2016.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routeAnimations]
})
export class Build2016Component implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  images2016: GalleryItem[];

  constructor() {}

  ngOnInit() {
    this.images2016 = [
      new ImageItem({
        src: './assets/img/gallery/2016/preview_xl/1.jpg',
        thumb: './assets/img/gallery/2016/preview_xs/1.jpg'
      }),
      new ImageItem({
        src: './assets/img/gallery/2016/preview_xl/2.jpg',
        thumb: './assets/img/gallery/2016/preview_xs/2.jpg'
      }),
      new ImageItem({
        src: './assets/img/gallery/2016/preview_xl/3.jpg',
        thumb: './assets/img/gallery/2016/preview_xs/3.jpg'
      }),
      new ImageItem({
        src: './assets/img/gallery/2016/preview_xl/4.jpg',
        thumb: './assets/img/gallery/2016/preview_xs/4.jpg'
      }),
      new ImageItem({
        src: './assets/img/gallery/2016/preview_xl/5.jpg',
        thumb: './assets/img/gallery/2016/preview_xs/5.jpg'
      }),
      new ImageItem({
        src: './assets/img/gallery/2016/preview_xl/6.jpg',
        thumb: './assets/img/gallery/2016/preview_xs/6.jpg'
      }),
      new ImageItem({
        src: './assets/img/gallery/2016/preview_xl/7.jpg',
        thumb: './assets/img/gallery/2016/preview_xs/7.jpg'
      }),
      new ImageItem({
        src: './assets/img/gallery/2016/preview_xl/8.jpg',
        thumb: './assets/img/gallery/2016/preview_xs/8.jpg'
      }),
      new ImageItem({
        src: './assets/img/gallery/2016/preview_xl/9.jpg',
        thumb: './assets/img/gallery/2016/preview_xs/9.jpg'
      })
    ];
  }
}
