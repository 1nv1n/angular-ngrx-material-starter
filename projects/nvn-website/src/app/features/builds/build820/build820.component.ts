import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';

import { routeAnimations } from '../../../core/core.module';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

@Component({
  selector: 'nvn-build-820',
  templateUrl: './build820.component.html',
  styleUrls: ['./build820.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routeAnimations]
})
export class Build820Component implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  images820: GalleryItem[];

  constructor() {}

  ngOnInit() {
    this.images820 = [
      new ImageItem({
        src: './assets/img/gallery/820/preview_xl/1.jpg',
        thumb: './assets/img/gallery/820/preview_xs/1.jpg'
      }),
      new ImageItem({
        src: './assets/img/gallery/820/preview_xl/2.jpg',
        thumb: './assets/img/gallery/820/preview_xs/2.jpg'
      }),
      new ImageItem({
        src: './assets/img/gallery/820/preview_xl/3.jpg',
        thumb: './assets/img/gallery/820/preview_xs/3.jpg'
      }),
      new ImageItem({
        src: './assets/img/gallery/820/preview_xl/4.jpg',
        thumb: './assets/img/gallery/820/preview_xs/4.jpg'
      }),
      new ImageItem({
        src: './assets/img/gallery/820/preview_xl/5.jpg',
        thumb: './assets/img/gallery/820/preview_xs/5.jpg'
      }),
      new ImageItem({
        src: './assets/img/gallery/820/preview_xl/6.jpg',
        thumb: './assets/img/gallery/820/preview_xs/6.jpg'
      }),
      new ImageItem({
        src: './assets/img/gallery/820/preview_xl/7.jpg',
        thumb: './assets/img/gallery/820/preview_xs/7.jpg'
      }),
      new ImageItem({
        src: './assets/img/gallery/820/preview_xl/8.jpg',
        thumb: './assets/img/gallery/820/preview_xs/8.jpg'
      }),
      new ImageItem({
        src: './assets/img/gallery/820/preview_xl/9.jpg',
        thumb: './assets/img/gallery/820/preview_xs/9.jpg'
      }),
      new ImageItem({
        src: './assets/img/gallery/820/preview_xl/10.jpg',
        thumb: './assets/img/gallery/820/preview_xs/10.jpg'
      }),
      new ImageItem({
        src: './assets/img/gallery/820/preview_xl/11.jpg',
        thumb: './assets/img/gallery/820/preview_xs/11.jpg'
      }),
      new ImageItem({
        src: './assets/img/gallery/820/preview_xl/12.jpg',
        thumb: './assets/img/gallery/820/preview_xs/12.jpg'
      }),
      new ImageItem({
        src: './assets/img/gallery/820/preview_xl/13.jpg',
        thumb: './assets/img/gallery/820/preview_xs/13.jpg'
      }),
      new ImageItem({
        src: './assets/img/gallery/820/preview_xl/14.jpg',
        thumb: './assets/img/gallery/820/preview_xs/14.jpg'
      }),
      new ImageItem({
        src: './assets/img/gallery/820/preview_xl/15.jpg',
        thumb: './assets/img/gallery/820/preview_xs/15.jpg'
      }),
      new ImageItem({
        src: './assets/img/gallery/820/preview_xl/16.jpg',
        thumb: './assets/img/gallery/820/preview_xs/16.jpg'
      }),
      new ImageItem({
        src: './assets/img/gallery/820/preview_xl/17.jpg',
        thumb: './assets/img/gallery/820/preview_xs/17.jpg'
      }),
      new ImageItem({
        src: './assets/img/gallery/820/preview_xl/18.jpg',
        thumb: './assets/img/gallery/820/preview_xs/18.jpg'
      }),
      new ImageItem({
        src: './assets/img/gallery/820/preview_xl/19.jpg',
        thumb: './assets/img/gallery/820/preview_xs/19.jpg'
      }),
      new ImageItem({
        src: './assets/img/gallery/820/preview_xl/20.jpg',
        thumb: './assets/img/gallery/820/preview_xs/20.jpg'
      })
    ];
  }
}
