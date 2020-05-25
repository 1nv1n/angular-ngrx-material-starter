import { environment as env } from '../../../environments/environment';

export interface WebsiteFeature {
  name: string;
  version?: string;
  description: string;
  github?: string;
  documentation?: string;
  medium?: string;
  web?: string;
}

export const websiteFeatures: WebsiteFeature[] = [
  {
    name: 'Angular',
    version: env.versions.angular,
    description:
      'Modern  application design framework & development platform for creating efficient and sophisticated apps.',
    github: 'https://github.com/angular/angular',
    documentation: 'https://angular.io/docs/ts/latest/'
  },
  {
    name: 'Angular Material',
    version: env.versions.material,
    description:
      'Component infrastructure and Material Design component library for Angular.',
    github: 'https://github.com/angular/material2/',
    documentation: 'https://material.angular.io/'
  },
  {
    name: 'Angular CLI',
    version: env.versions.angularCli,
    description:
      'A command line interface for Angular built using best practices for applications that work right out of the box.',
    github: 'https://github.com/angular/angular-cli',
    documentation: 'https://cli.angular.io/'
  },
  {
    name: 'Google Fonts',
    description:
      'Faster page load time by safely caching fonts without compromising users’ privacy or security.',
    github: 'https://github.com/google/fonts',
    web: 'https://fonts.google.com/'
  },
  {
    name: 'RxJS',
    version: env.versions.rxjs,
    description:
      'Library for composing asynchronous and event-based programs by using observable sequences, providing one core type, the Observable.',
    github: 'https://github.com/ReactiveX/RxJS',
    documentation: 'http://reactivex.io/rxjs/',
    medium:
      'https://medium.com/@tomastrajan/practical-rxjs-in-the-wild-requests-with-concatmap-vs-mergemap-vs-forkjoin-11e5b2efe293'
  },
  {
    name: 'NgRx',
    version: env.versions.ngrx,
    description:
      '"@ngrx provides a set of clean, well-tested libraries for reactive programming in Angular applications',
    github: 'https://github.com/ngrx/platform',
    documentation: 'http://ngrx.github.io/',
    medium:
      'https://medium.com/@tomastrajan/object-assign-vs-object-spread-in-angular-ngrx-reducers-3d62ecb4a4b0'
  },
  {
    name: 'Bootstrap',
    version: env.versions.bootstrap,
    description:
      'World’s most popular framework for building responsive, mobile-first sites.',
    github: 'https://github.com/twbs/bootstrap',
    documentation:
      'https://getbootstrap.com/docs/4.5/getting-started/introduction/',
    medium:
      'https://medium.com/@tomastrajan/how-to-build-responsive-layouts-with-bootstrap-4-and-angular-6-cfbb108d797b'
  },
  {
    name: 'Typescript',
    version: env.versions.typescript,
    description:
      'Typed JavaScript at Any Scale, TypeScript extends JavaScript by adding types to the language.',
    github: 'https://github.com/Microsoft/TypeScript',
    documentation: 'https://www.typescriptlang.org/docs/home.html'
  },
  {
    name: 'ngx-translate',
    version: env.versions.ngxtranslate,
    description: 'An internationalization library for Angular',
    github: 'https://github.com/ngx-translate/core',
    documentation: 'http://www.ngx-translate.com/'
  },
  {
    name: 'Font Awesome 5',
    version: env.versions.fontAwesome,
    description:
      "Easy to use vector icons and social logos from the web's most popular icon set and toolkit.",
    github: 'https://github.com/FortAwesome/Font-Awesome',
    documentation: 'https://fontawesome.com/icons'
  },
  {
    name: 'Cypress',
    version: env.versions.cypress,
    description:
      'Cypress is a next generation front end testing tool - fast, easy and reliable testing for anything that runs in a browser.',
    github: 'https://github.com/cypress-io/cypress',
    documentation:
      'https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell'
  },
  {
    name: 'Material Theming',
    description: 'Flexible theming support for provided and custom components.',
    documentation: 'https://material.angular.io/guide/theming',
    medium:
      'https://medium.com/@tomastrajan/the-complete-guide-to-angular-material-themes-4d165a9d24d1'
  },
  {
    name: 'Lazy Loading',
    description: 'Faster startup time with lazy loaded feature modules',
    documentation:
      'https://angular.io/guide/router#lazy-loading-route-configuration'
  },
  {
    name: '@ngx-gallery',
    version: '5.0.0-beta.0',
    description:
      'An Angular gallery, simplifies the process of creating beautiful galleries.',
    github: 'https://github.com/murhafsousli/ngx-gallery',
    documentation: 'https://murhafsousli.github.io/ngx-gallery/#/'
  }
];
