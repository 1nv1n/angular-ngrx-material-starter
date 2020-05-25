import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./features/projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: 'builds',
    loadChildren: () =>
      import('./features/builds/builds.module').then(m => m.BuildsModule)
  },
  {
    path: 'bio',
    loadChildren: () =>
      import('./features/bio/bio.module').then(m => m.BioModule)
  },
  {
    path: 'collections',
    loadChildren: () =>
      import('./features/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./features/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./features/settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: '**',
    redirectTo: 'about'
  }
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
