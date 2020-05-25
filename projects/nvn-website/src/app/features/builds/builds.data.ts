import { environment as env } from '../../../environments/environment';

export interface Build {
  name: string;
  link: string;
}

export const buildList: Build[] = [
  {
    name: 'Core P5',
    link: 'build-p5'
  },
  {
    name: 'NZXT Phantom 820',
    link: 'build-820'
  }
];
