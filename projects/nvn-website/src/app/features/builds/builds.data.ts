import { environment as env } from '../../../environments/environment';

export interface Build {
  name: string;
  link: string;
  year: number;
  summary: string;
  class: string;
}

export const buildList: Build[] = [
  {
    name: 'Core P5',
    link: 'build2016',
    year: 2016,
    summary: '',
    class: 'build-2014-image'
  },
  {
    name: 'NZXT Phantom 820',
    link: 'build2014',
    year: 2014,
    summary: '',
    class: 'build-2016-image'
  },
  {
    name: 'XoticPC Sager NP9170',
    link: 'build2012',
    year: 2012,
    summary: '',
    class: 'build-2012-image'
  }
];
