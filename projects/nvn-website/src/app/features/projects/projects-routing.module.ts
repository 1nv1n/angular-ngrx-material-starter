import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { WebsiteFeatureListComponent } from './website-feature-list/website-feature-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Projects' },
    children: [
      {
        path: '',
        redirectTo: 'projects',
        pathMatch: 'full'
      },
      {
        path: 'projects/website-feature-list',
        redirectTo: 'website-feature-list',
        pathMatch: 'full'
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        data: { title: 'Projects' }
      },
      {
        path: 'website-feature-list',
        component: WebsiteFeatureListComponent,
        data: { title: 'Website Feature List' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
