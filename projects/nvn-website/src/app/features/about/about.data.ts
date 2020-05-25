import { environment as env } from '../../../environments/environment';

export interface Category {
  name: string;
  description: string;
  link: string;
}

export const categoryList: Category[] = [
  {
    name: 'Projects',
    description: 'Dev. Projects & Websites',
    link: 'projects'
  },
  {
    name: 'Builds',
    description: 'Hardware Builds',
    link: 'builds'
  },
  {
    name: 'Bio',
    description: 'Profile & Resume',
    link: 'bio'
  },
  {
    name: 'Contact',
    description: 'Contact Information',
    link: 'contact'
  }
];
