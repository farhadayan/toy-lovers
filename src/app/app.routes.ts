import { Routes } from '@angular/router';
import { userLogin, userRole } from './login/state/login-guard';
import { showNavLink } from './common-use/guards/naviagtion.guards';
import { AuthGuard } from './common-use/guards/authGuard';



export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home-page/home-page.component'),
  },
  {
    path: 'browse-toys',
    loadComponent: () => import('./toy-browse/toy-browse.component'),
  },
  {
    path: 'about',

    loadComponent: () =>
      import('./toy-browse/toy-browse.component'),
  },
  {
    path: 'login',
    loadComponent: () =>  import('./login/login.component'),
  },
  
  {
    path: 'my-page',
    canActivate: [AuthGuard],
    loadComponent: () => import('./my-page/my-page.component'),
    children: [
      {
        path: 'sell',
        loadComponent: () => import('./my-page/sell/sell.component'),
      },
      {
        path: 'bought',
        loadComponent: () => import('./my-page/bought/bought.component'),
      },
      {
        path: 'archived',
        loadComponent: () => import('./my-page/archived/archived.component'),
      },
      {
        path: 'settings',
        loadComponent: () => import('./my-page/settings/settings.component'),
      },
      {
        path: 'editimage',
        loadComponent: () => import('./my-page/editimage/editimage.component')
      },
    ],
  },
  {
    path: 'register-page',
    loadComponent: () =>
      import('./common-use/register-page/register-page.component'),
  },
  {
    path: '404',
    loadComponent: () =>
      import('./common-use/page-not-found/page-not-found.component'),
  },
  {
    path: '500',
    loadComponent: () =>
      import(
        './common-use/internal-server-error/internal-server-error.component'
      ),
  },
  {
    path: '503',
    loadComponent: () =>
      import('./common-use/service-unavailable/service-unavailable.component'),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

