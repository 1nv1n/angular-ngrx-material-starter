import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

import { WebsiteFeature, websiteFeatures } from '../website-feature-list.data';

@Component({
  selector: 'nvn-feature-list',
  templateUrl: './website-feature-list.component.html',
  styleUrls: ['./website-feature-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebsiteFeatureListComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  websiteFeatures: WebsiteFeature[] = websiteFeatures;

  ngOnInit() {}

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
