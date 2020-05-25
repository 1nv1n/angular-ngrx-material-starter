import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BuildsComponent } from './builds/builds.component';
import { Build820Component } from './build820/build820.component';
import { BuildP5Component } from './buildp5/buildp5.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Builds' },
    children: [
      {
        path: '',
        redirectTo: 'builds',
        pathMatch: 'full'
      },
      {
        path: 'builds/build-820',
        redirectTo: 'build-820',
        pathMatch: 'full'
      },
      {
        path: 'builds/build-p5',
        redirectTo: 'build-p5',
        pathMatch: 'full'
      },
      {
        path: 'builds',
        component: BuildsComponent,
        data: { title: 'Builds' }
      },
      {
        path: 'build-820',
        component: Build820Component,
        data: { title: 'NZXT Phantom 820' }
      },
      {
        path: 'build-p5',
        component: BuildP5Component,
        data: { title: 'Core P5' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildsRoutingModule {}
