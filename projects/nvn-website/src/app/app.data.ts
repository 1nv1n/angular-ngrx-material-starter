import { environment as env } from '../environments/environment';

export interface NavList {
  link: string;
  label: string;
}

export const navList: NavList[] = [
  { link: 'about', label: 'About' },
  { link: 'projects', label: 'Projects' },
  { link: 'builds', label: 'Builds' },
  { link: 'bio', label: 'Bio' },
  { link: 'contact', label: 'Contact' }
];
