import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    data: { title: 'About' }
  },
  {
    path: 'projects',
    data: { title: 'Projects' },
    loadChildren: () =>
      import('../projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: 'builds',
    data: { title: 'Builds' },
    loadChildren: () =>
      import('../builds/builds.module').then(m => m.BuildsModule)
  },
  {
    path: 'bio',
    data: { title: 'Bio' },
    loadChildren: () => import('../bio/bio.module').then(m => m.BioModule)
  },
  {
    path: 'contact',
    data: { title: 'Contact' },
    loadChildren: () =>
      import('../contact/contact.module').then(m => m.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
