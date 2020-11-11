import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BuildsComponent } from './builds/builds.component';
import { Build2012Component } from './build2012/build2012.component';
import { Build2014Component } from './build2014/build2014.component';
import { Build2016Component } from './build2016/build2016.component';

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
        path: 'builds/build2012',
        redirectTo: 'build2012',
        pathMatch: 'full'
      },
      {
        path: 'builds/build2014',
        redirectTo: 'build2014',
        pathMatch: 'full'
      },
      {
        path: 'builds/build2016',
        redirectTo: 'build2016',
        pathMatch: 'full'
      },
      {
        path: 'builds',
        component: BuildsComponent,
        data: { title: 'Builds' }
      },
      {
        path: 'build2012',
        component: Build2012Component,
        data: { title: 'XoticPC Sager NP9170' }
      },
      {
        path: 'build2014',
        component: Build2014Component,
        data: { title: 'NZXT Phantom 820' }
      },
      {
        path: 'build2016',
        component: Build2016Component,
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
