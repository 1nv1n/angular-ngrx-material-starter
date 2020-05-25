import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { routeAnimations } from '../../../core/core.module';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

import { Category, categoryList } from '../about.data';

@Component({
  selector: 'nvn-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routeAnimations]
})
export class AboutComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  categoryList: Category[] = categoryList;

  ngOnInit() {}

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
