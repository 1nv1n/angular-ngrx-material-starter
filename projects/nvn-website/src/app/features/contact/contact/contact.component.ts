import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { routeAnimations } from '../../../core/core.module';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

@Component({
  selector: 'nvn-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routeAnimations]
})
export class ContactComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  ngOnInit() {}

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
