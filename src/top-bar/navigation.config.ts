export interface NavigationConfigLink {
  icon: string;
  title: string;
  link: string | null;
}

export const NAVIGATION_CONFIG: NavigationConfigLink[] = [
  {
    icon:  '',
    title: 'Browse Toys',
    link:  'browse-toys',
  },
  {
    icon: '',
    title: 'My page',
    link: 'my-page',
  },
  {
    icon: '',
    link: 'about',
    title: 'About',
  },
  {
    icon: '',
    link: 'contact',
    title: 'Contact',
  }
];
