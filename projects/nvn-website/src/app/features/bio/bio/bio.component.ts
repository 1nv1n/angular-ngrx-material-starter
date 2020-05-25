import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { routeAnimations } from '../../../core/core.module';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

@Component({
  selector: 'nvn-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routeAnimations]
})
export class BioComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  ngOnInit() {}

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
