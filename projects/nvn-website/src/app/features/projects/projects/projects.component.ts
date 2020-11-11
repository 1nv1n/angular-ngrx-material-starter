import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

import {
  Project,
  appProjects,
  webProjects,
  mobileProjects
} from '../projects.data';

@Component({
  selector: 'nvn-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@Injectable()
export class ProjectsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  appProjects: Project[] = appProjects;
  webProjects: Project[] = webProjects;
  mobileProjects: Project[] = mobileProjects;
  resData: Observable<HttpResponse<any>>;
  httpOptions: {
    observe: 'response';
    responseType: 'json';
  };
  error: any;
  config: any;
  headers: string[];

  constructor(private http: HttpClient) {
    appProjects.forEach((project) => {
      // http.get(project.sgAPIURL, { observe: 'response' }).subscribe(resp => {
      //   this.config = { ...resp };
      //   let body = this.config.body;
      //   console.log(body.length);
      //   project.sgCount = body.length;
      // });
    });
  }

  ngOnInit() {}

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
