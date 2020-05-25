import { environment as env } from '../../../environments/environment';

export interface TagChip {
  label: string;
  link: string;
}

export interface Project {
  name: string;
  tech: string;
  subtitle?: string;
  description: string;
  github?: string;
  sgAPIURL?: string;
  psURL?: string;
  sgCount?: number;
  link?: string;
  feature?: string;
  license?: string;
  tags: Array<TagChip>;
}

const electronTagChip: TagChip = {
  label: 'electron',
  link: 'https://electronjs.org/'
};
const bootstrapTagChip: TagChip = {
  label: 'bootstrap',
  link: 'https://getbootstrap.com/'
};
const bulmaTagChip: TagChip = { label: 'bulma', link: 'https://bulma.io/' };
const angularTagChip: TagChip = {
  label: 'angular',
  link: 'https://angular.io/'
};
const angularMaterialTagChip: TagChip = {
  label: 'angular-material',
  link: 'https://material.angular.io/'
};
const monacoTagChip: TagChip = {
  label: 'monaco',
  link: 'https://github.com/Microsoft/monaco-editor'
};
const firebaseTagChip: TagChip = {
  label: 'firebase',
  link: 'https://firebase.google.com/docs/hosting/'
};
const jsGridTagChip: TagChip = {
  label: 'js-grid',
  link: 'http://js-grid.com/'
};
const flutterTagChip: TagChip = {
  label: 'flutter',
  link: 'https://flutter.dev/'
};
const androidTagChip: TagChip = {
  label: 'android',
  link: 'https://www.android.com/'
};
const rtTagChip: TagChip = {
  label: 'rotten-tomatoes',
  link: 'https://www.rottentomatoes.com/'
};

export const appProjects: Project[] = [
  {
    name: 'Code Goes Here',
    tech: 'Desktop',
    subtitle: 'Code. Compile. Commit.',
    description:
      'A cross-platform application to practice programming. Code on the Monaco Editor, compile via JDoodle & commit to GitHub.',
    github: 'https://github.com/1nv1n/code-goes-here',
    sgAPIURL: 'https://api.github.com/repos/1nv1n/code-goes-here/stargazers',
    sgCount: 4,
    link: 'about',
    license: 'Apache-2.0',
    tags: [electronTagChip, bulmaTagChip, monacoTagChip]
  },
  {
    name: 'Review Dashboard',
    tech: 'Desktop',
    subtitle: 'Code Reviews Reviewed',
    description:
      "A cross-platform dashboard for handling code reviews for Atlassian's Crucible. Supports multiple Crucible instances.",
    github: 'https://github.com/1nv1n/review-dashboard',
    sgAPIURL: 'https://api.github.com/repos/1nv1n/review-dashboard/stargazers',
    sgCount: 1,
    link: 'about',
    license: 'Apache-2.0',
    tags: [electronTagChip, bootstrapTagChip, jsGridTagChip]
  },
  {
    name: 'Angular-Material-Electron',
    tech: 'Desktop',
    subtitle: 'Starter project',
    description:
      'A template/starter for cross-platform desktop application using Electron with Angular & Angular Material for the front-end.',
    github: 'https://github.com/1nv1n/angular-material-electron',
    sgAPIURL:
      'https://api.github.com/repos/1nv1n/angular-material-electron/stargazers',
    sgCount: 2,
    link: 'about',
    license: 'MIT',
    tags: [electronTagChip, angularTagChip, angularMaterialTagChip]
  }
];

export const webProjects: Project[] = [
  {
    name: 'Personal Website',
    tech: 'Web',
    description: 'This website, built with Angular & Material.',
    feature: 'website-feature-list',
    tags: [angularTagChip, angularMaterialTagChip, firebaseTagChip]
  },
  {
    name: 'Csavargó',
    tech: 'Web',
    description: "Csavargó magazine's website.",
    link: 'https://csavargomagazine.com/',
    tags: [bootstrapTagChip, firebaseTagChip]
  }
];

export const mobileProjects: Project[] = [
  {
    name: 'Yet Another Tip Calculator',
    tech: 'Mobile',
    subtitle: 'tip_calc',
    description:
      'A simple tip calculator, built with Flutter - published on the Google Play Store.',
    github: 'https://github.com/1nv1n/tip_calc',
    psURL: 'https://play.google.com/store/apps/details?id=com.invin.tipcalc',
    link: 'about',
    license: 'Apache-2.0',
    tags: [flutterTagChip, androidTagChip]
  },
  {
    name: 'Find Similar Movies',
    tech: 'Mobile',
    subtitle: 'Movie Finder',
    description: "Use RottenTomatoes' API to suggest similar movies.",
    github: 'https://github.com/1nv1n/SimilarMovies',
    sgAPIURL: 'https://api.github.com/repos/1nv1n/SimilarMovies/stargazers',
    sgCount: 3,
    link: 'about',
    license: 'MIT',
    tags: [androidTagChip, rtTagChip]
  }
];
