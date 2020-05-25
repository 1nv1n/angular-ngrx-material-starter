import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { routeAnimations } from '../../../core/core.module';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

import { Build, buildList } from '../builds.data';

@Component({
  selector: 'nvn-builds',
  templateUrl: './builds.component.html',
  styleUrls: ['./builds.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routeAnimations]
})
export class BuildsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  buildList: Build[] = buildList;

  constructor() {}

  ngOnInit() {}

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
